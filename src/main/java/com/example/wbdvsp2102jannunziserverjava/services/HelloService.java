package com.example.wbdvsp2102jannunziserverjava.services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloService {
    @GetMapping("/hello")
    public String sayHi() {
        return "Hello World!";
    }
    
    @GetMapping("/addAandB/{A}/{B}")
    public Integer add(
            @PathVariable("A") Integer a,
            @PathVariable("B") Integer b) {
        return a + b;
    }
    
    @GetMapping("/my/hello/object")
    public HelloObject getHelloObject() {
        HelloObject h = new HelloObject();
        h.setId(123);
        h.setName("My Hello Object");
        return h;
    }
}
