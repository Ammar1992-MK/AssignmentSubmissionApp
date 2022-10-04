package com.ammar.CodeHub.service;

import com.ammar.CodeHub.domain.Assignment;
import com.ammar.CodeHub.domain.User;
import com.ammar.CodeHub.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepo;


    public Assignment createAssignment(User user){

        Assignment assignment = new Assignment();
        assignment.setStatus("To be submitted");
        assignment.setUser(user);
       return  assignmentRepo.save(assignment);
    }

    public Set<Assignment> findByUser(User user){
        return assignmentRepo.findByUser(user);
    }

    public Optional<Assignment> findById(Long id){
        return assignmentRepo.findById(id);
    }

    public Assignment save(Assignment assignment) {
       return assignmentRepo.save(assignment);
    }
}
