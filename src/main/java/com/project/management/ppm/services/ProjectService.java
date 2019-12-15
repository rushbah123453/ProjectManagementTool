package com.project.management.ppm.services;

import com.project.management.ppm.domain.Project;
import org.springframework.http.ResponseEntity;

public interface ProjectService {

    public Project saveOrUpdateProject(Project project);

    public Project getProjectById(String projectId);

    public Iterable getAllProject();

    public void deleteByProjectId(String projectId);
}
