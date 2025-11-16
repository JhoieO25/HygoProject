package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.security.JwtUtil;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");
        String roleStr = body.get("role");
        User.Role role = User.Role.valueOf(roleStr.toUpperCase());

        // TODO: Add geofencing check for teachers here

        return userService.authenticate(username, password, role)
                .map(user -> Map.of(
                        "token", jwtUtil.generateToken(user.getUsername(), user.getRole().name()),
                        "role", user.getRole().name()
                ))
                .orElseThrow(() -> new RuntimeException("Invalid credentials or role"));
    }
}
