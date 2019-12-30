package com.project.management.ppm.services;

import com.project.management.ppm.domain.Backlog;
import com.project.management.ppm.domain.Project;
import com.project.management.ppm.domain.User;
import com.project.management.ppm.exception.BacklogNotFoundException;
import com.project.management.ppm.exception.ProjectIdException;
import com.project.management.ppm.repository.BacklogRepository;
import com.project.management.ppm.repository.ProjectRepository;
import com.project.management.ppm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.xml.ws.ServiceMode;
import java.security.Principal;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Project saveOrUpdateProject(Project project, String userName) {
        try {

            User user=userRepository.findByUsername(userName);
            project.setUser(user);
            project.setProjectLeader(user.getUsername());

            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

            if (project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

            } else {
                project.setBacklog(backlogRepository.findByProjectIdentifier(project.getProjectIdentifier().toUpperCase()));

            }

            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project Id: " + project.getProjectIdentifier().toUpperCase() + " already exists");
        }

    }

    @Override
    public Project getProjectById(String projectId,String userName) {

        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectIdException("Project Id does not exists");
        }

        if (!project.getProjectLeader().equals(userName)){
            throw new BacklogNotFoundException("Project Not found in your account");
        }

        return project;
    }

    @Override
    public Iterable getAllProject(String projectLeader) {
        return projectRepository.findAllByProjectLeader(projectLeader);
    }

    public void deleteByProjectId(String projectId,String userName) {

        projectRepository.delete(getProjectById(projectId,userName));
    }

}
