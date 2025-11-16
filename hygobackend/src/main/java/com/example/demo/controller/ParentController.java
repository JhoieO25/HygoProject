package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ParentController {
    @GetMapping("/parent/dashboard")
    public String parentDashboard() {
        return "PARENT DASHBOARD";
    }
}
