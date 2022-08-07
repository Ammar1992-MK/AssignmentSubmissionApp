package com.ammar.CodeHub.repository;

import com.ammar.CodeHub.domain.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}
