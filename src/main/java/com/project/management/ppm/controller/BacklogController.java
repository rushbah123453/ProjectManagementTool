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
import java.security.Principal;
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
    private ResponseEntity<?> addPTtoBacklogs(@Valid @RequestBody ProjectTask projectTask, BindingResult bindingResults, @PathVariable String backlog_id, Principal principal) {
        ResponseEntity<?> responseEntity = errorMapService.getErrorMap(bindingResults);
        if (responseEntity != null) return responseEntity;
        ProjectTask projectTask1 = projectTaskService.addProject(backlog_id, projectTask,principal.getName());

        return new ResponseEntity<ProjectTask>(projectTask1, HttpStatus.CREATED);

    }


    @GetMapping("/{backlog_id}")
    private Iterable<ProjectTask> getProjectTaskByBacklogId(@PathVariable String backlog_id,Principal principal) {
        Iterable<ProjectTask> projectTask = projectTaskService.getProjectTasksByBacklogId(backlog_id,principal.getName());
        if (((Collection<?>) projectTask).size() == 0) {
            throw new ProjectTaskException("No Project Task in " + backlog_id + " . Please Create Project Task ");
        }
        return projectTask;
    }

    @GetMapping("/{backlog_id}/{pt_id}")
    private ResponseEntity<?> getProjectTaskBySequenceId(@PathVariable String backlog_id, @PathVariable String pt_id ,Principal principal ){
        ProjectTask projectTask=projectTaskService.getProjectTaskBySequenceId(backlog_id,pt_id,principal.getName());
        return new ResponseEntity<>(projectTask, HttpStatus.OK);
    }


    @PatchMapping("/{backlog_id}/{pt_id}")
    private ResponseEntity<?> updateProjectTaskByProjectSequenceId(@Valid @RequestBody ProjectTask projectTask, BindingResult bindingResult,
                                                                   @PathVariable String backlog_id,  @PathVariable String pt_id,Principal principal )
    {
        ResponseEntity<?> responseEntity = errorMapService.getErrorMap(bindingResult);
        if (responseEntity != null) return responseEntity;
        ProjectTask projectTask1=projectTaskService.updateProjectTaskByProjectSequenceId(projectTask,backlog_id,pt_id,principal.getName());
        return new ResponseEntity<>(projectTask1,HttpStatus.OK);

    }



    @DeleteMapping("/{backlog_id}/{pt_id}")
    private ResponseEntity<?> deleteProjectTaskByProjectSequenceId(@PathVariable String backlog_id,  @PathVariable String pt_id,Principal principal ){

        projectTaskService.deleteProjectTaskByProjectSequenceId(backlog_id,pt_id,principal.getName());
        return new ResponseEntity<>("Project Task "+pt_id+" deleted !!",HttpStatus.OK);
    }


}
