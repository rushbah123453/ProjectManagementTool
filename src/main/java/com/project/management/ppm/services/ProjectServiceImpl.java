package com.project.management.ppm.services;

import com.project.management.ppm.domain.Project;
import com.project.management.ppm.exception.ProjectIdException;
import com.project.management.ppm.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.xml.ws.ServiceMode;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project saveOrUpdateProject(Project project) {
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e) {
           throw new ProjectIdException("Project Id: "+project.getProjectIdentifier().toUpperCase()+" already exists");
        }

    }

    @Override
    public Project getProjectById(String projectId) {

        Project project=projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project==null){
            throw new ProjectIdException("Project Id does not exists");
        }
        return project;
    }

    @Override
    public Iterable getAllProject() {
        return projectRepository.findAll();
    }



    public void deleteByProjectId(String projectId){

        Project project=projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project==null){
            throw new ProjectIdException("Project Id does not exists for deletion");
        }
         projectRepository.delete(project);
    }

}
