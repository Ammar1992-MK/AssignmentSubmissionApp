package com.ammar.CodeHub.service;

import com.ammar.CodeHub.domain.User;
import com.ammar.CodeHub.repository.UserRepository;
import com.ammar.CodeHub.util.CustomPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> user =  userRepository.findByUsername(username);

        return user.orElseThrow(() -> new UsernameNotFoundException("Invalid Credentials"));
    }
}
