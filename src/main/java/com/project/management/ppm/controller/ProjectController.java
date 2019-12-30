package com.project.management.ppm.controller;

import com.project.management.ppm.domain.Project;
import com.project.management.ppm.services.ErrorMapService;
import com.project.management.ppm.services.ProjectServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/project")
@CrossOrigin
public class ProjectController {

    @Autowired
    private ProjectServiceImpl projectServiceImpl;
    @Autowired
    private ErrorMapService errorMapService;

    @PostMapping("")
    private ResponseEntity<?> createProject(@Valid @RequestBody Project project, BindingResult bindingResult, Principal principal){


        ResponseEntity<?> responseEntity=errorMapService.getErrorMap(bindingResult);
        if (responseEntity!=null) return responseEntity;
        Project project1=  projectServiceImpl.saveOrUpdateProject(project,principal.getName());
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    private ResponseEntity<?> getProjectById(@PathVariable String projectId ){
        Project project=projectServiceImpl.getProjectById(projectId);
        return new ResponseEntity<Project>(project,HttpStatus.OK);
    }

    @GetMapping("/all")
    private Iterable getAllProject(){
        return projectServiceImpl.getAllProject();
    }

    @DeleteMapping("/{projectId}")
    private ResponseEntity<?> deleteByProjectId(@PathVariable String projectId){

        projectServiceImpl.deleteByProjectId(projectId);

        return new ResponseEntity<String>("Project with ID:"+projectId+"deleted",HttpStatus.OK);
    }


}
