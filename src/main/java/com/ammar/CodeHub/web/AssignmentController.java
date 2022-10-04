package com.ammar.CodeHub.web;

import com.ammar.CodeHub.domain.Assignment;
import com.ammar.CodeHub.domain.User;
import com.ammar.CodeHub.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;

    @PostMapping("")
    public ResponseEntity<?> createAssignment(@AuthenticationPrincipal User user){

        Assignment newAssignment = assignmentService.createAssignment(user);

        return ResponseEntity.ok(newAssignment);
    }

    @GetMapping("")
    public ResponseEntity<?> getAssignments(@AuthenticationPrincipal User user){

        return ResponseEntity.ok(assignmentService.findByUser(user));
    }

    @GetMapping("{assignmentId}")
    public ResponseEntity<?> getAssignmentById(@PathVariable Long assignmentId, @AuthenticationPrincipal User user){

        Optional<Assignment> assignmentOpt = assignmentService.findById(assignmentId);

        return ResponseEntity.ok(assignmentOpt.orElse(new Assignment()));
    }

    @PutMapping("{assignmentId}")
    public ResponseEntity<?> getAssignmentById(@PathVariable Long assignmentId,
                                               @RequestBody Assignment assignment,
                                               @AuthenticationPrincipal User user){
       Assignment updatedAssignment =  assignmentService.save(assignment);

       return ResponseEntity.ok(updatedAssignment);
    }
}
