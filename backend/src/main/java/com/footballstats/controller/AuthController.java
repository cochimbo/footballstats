package com.footballstats.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public Mono<Map<String, String>> login(@RequestBody Map<String, String> credentials) {
        // This is a dummy implementation for now
        String username = credentials.get("username");
        String password = credentials.get("password");
        
        if ("admin".equals(username) && "password".equals(password)) {
            return Mono.just(Map.of(
                "message", "Login successful",
                "token", "dummy-jwt-token-" + System.currentTimeMillis()
            ));
        } else {
            return Mono.just(Map.of("message", "Invalid credentials"));
        }
    }
}