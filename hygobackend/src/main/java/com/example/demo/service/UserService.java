package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository UserRepository;

    public Optional<User> authenticate(String username, String password, User.Role role) {
        Optional<User> userOpt = UserRepository.findByUsernameAndRole(username, role);
return userOpt.filter(user -> user.getPassword().equals(password));
    }
}