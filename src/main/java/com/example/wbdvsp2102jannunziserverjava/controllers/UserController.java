package com.example.wbdvsp2102jannunziserverjava.controllers;

import com.example.wbdvsp2102jannunziserverjava.models.User;
import com.example.wbdvsp2102jannunziserverjava.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {
    @Autowired
    UserRepository repository;
    
    @PostMapping("/api/users/register")
    public User register(
            @RequestBody User credentials, HttpSession session) {
        User existingUser = repository.findUserByUsername(credentials.getUsername());
        if(existingUser == null) {
            User newUser = repository.save(credentials);
            session.setAttribute("profile", newUser);
            return newUser;
        }
        return null;
    }

    @PostMapping("/api/users/login")
    public User login(
            @RequestBody User credentials,
            HttpSession session
    ) {
        User existingUser = repository.findUserByCredentials(credentials.getUsername(), credentials.getPassword());
        if(existingUser != null) {
            session.setAttribute("profile", existingUser);
            return existingUser;
        }
        return null;
    }
    
    @PostMapping("/api/users/profile")
    public User profile(HttpSession session) {
        User currentUser = (User)session.getAttribute("profile");
        return currentUser;
    }
    
    @PostMapping("/api/users/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }
    
    @GetMapping("/api/users")
    public List<User> findAllUser() {
        return (List<User>) repository.findAll();
    }

    @GetMapping("/api/users/{uid}")
    public User findUserById(
            @PathVariable("uid") Integer userId) {
        return repository.findById(userId).get();
    }
}
