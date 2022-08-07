package com.ammar.CodeHub.web;

import com.ammar.CodeHub.domain.Assignment;
import com.ammar.CodeHub.domain.User;
import com.ammar.CodeHub.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
}
