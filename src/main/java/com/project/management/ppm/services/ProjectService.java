package com.project.management.ppm.services;

import com.project.management.ppm.domain.Project;
import org.springframework.http.ResponseEntity;

import java.security.Principal;

public interface ProjectService {

    public Project saveOrUpdateProject(Project project,String userName);

    public Project getProjectById(String projectId,String userName);

    public Iterable getAllProject(String projectLeader);

    public void deleteByProjectId(String projectId,String userName);
}
