package com.project.management.ppm.repository;

import com.project.management.ppm.domain.Backlog;
import com.project.management.ppm.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog,Long> {

  Backlog findByProjectIdentifier(String projectIdentifier);




}
