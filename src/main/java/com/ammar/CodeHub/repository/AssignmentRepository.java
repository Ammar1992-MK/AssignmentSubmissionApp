package com.ammar.CodeHub.repository;

import com.ammar.CodeHub.domain.Assignment;
import com.ammar.CodeHub.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.Set;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {

    Set<Assignment> findByUser(User user);

    @Override
    Optional<Assignment> findById(Long aLong);
}
