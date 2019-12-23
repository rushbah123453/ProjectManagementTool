package com.project.management.ppm.controller;

import com.project.management.ppm.domain.ProjectTask;
import com.project.management.ppm.exception.ProjectTaskException;
import com.project.management.ppm.services.ErrorMapService;
import com.project.management.ppm.services.ProjectTaskServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
@RequestMapping("/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private ProjectTaskServiceImpl projectTaskService;

    @Autowired
    private ErrorMapService errorMapService;

    @PostMapping("/{backlog_id}")
    private ResponseEntity<?> addPTtoBacklogs(@Valid @RequestBody ProjectTask projectTask, BindingResult bindingResults, @PathVariable String backlog_id) {
        ResponseEntity<?> responseEntity = errorMapService.getErrorMap(bindingResults);
        if (responseEntity != null) return responseEntity;
        ProjectTask projectTask1 = projectTaskService.addProject(backlog_id, projectTask);

        return new ResponseEntity<ProjectTask>(projectTask1, HttpStatus.CREATED);

    }


    @GetMapping("/{backlog_id}")
    private Iterable<ProjectTask> getProjectTaskByBacklogId(@PathVariable String backlog_id) {
        Iterable<ProjectTask> projectTask = projectTaskService.getProjectTasksByBacklogId(backlog_id);
        if (((Collection<?>) projectTask).size() == 0) {
            throw new ProjectTaskException("Project " + backlog_id + " not found");
        }
        return projectTask;
    }

    @GetMapping("/{backlog_id}/{pt_id}")
    private ResponseEntity<?> getProjectTaskBySequenceId(@PathVariable String backlog_id, @PathVariable String pt_id  ){
        ProjectTask projectTask=projectTaskService.getProjectTaskBySequenceId(backlog_id,pt_id);
        return new ResponseEntity<>(projectTask, HttpStatus.OK);
    }



}
