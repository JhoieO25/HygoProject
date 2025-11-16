package com.example.demo;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
    private Double latitude;   // teachers only
    private Double longitude;  // teachers only
}
