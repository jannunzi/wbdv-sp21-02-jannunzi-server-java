package com.example.wbdvsp2102jannunziserverjava.repositories;

import com.example.wbdvsp2102jannunziserverjava.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository
    extends CrudRepository<User, Integer> {
    @Query("SELECT user FROM User user WHERE user.username=:uname")
    public User findUserByUsername(@Param("uname") String username);
    
    @Query("SELECT user FROM User user WHERE user.username=:uname AND user.password=:pass")
    public User findUserByCredentials(
            @Param("uname") String username,
            @Param("pass") String password);
}
