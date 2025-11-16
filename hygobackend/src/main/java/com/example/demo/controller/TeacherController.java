package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeacherController {
    @GetMapping("/teacher/dashboard")
    public String teacherDashboard() {
        return "TEACHER DASHBOARD";
    }
}
