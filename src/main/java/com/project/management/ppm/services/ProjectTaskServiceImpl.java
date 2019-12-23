package com.project.management.ppm.services;

import com.project.management.ppm.domain.Backlog;
import com.project.management.ppm.domain.ProjectTask;
import com.project.management.ppm.exception.BacklogNotFoundException;
import com.project.management.ppm.exception.ProjectIdException;
import com.project.management.ppm.exception.ProjectTaskException;
import com.project.management.ppm.repository.BacklogRepository;
import com.project.management.ppm.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskServiceImpl implements ProjectTaskService {


    @Autowired
    private BacklogRepository backlogRepository;
    @Autowired
    private ProjectTaskRepository projectTaskRepository;


    @Override
    public ProjectTask addProject(String projectIdentifier, ProjectTask projectTask) {

//exception

try{
        Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
        projectTask.setBacklog(backlog);
        projectTask.setProjectIdentifier(projectIdentifier);
        Integer backlogSequence = backlog.getPTSeequence();
        backlogSequence++;
        backlog.setPTSeequence(backlogSequence);
        projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);

        if (projectTask.getStatus() == "" || projectTask.getStatus() == null)
            projectTask.setStatus("TO_DO");

        if (projectTask.getPriority() == null)
            projectTask.setPriority(3);

        return projectTaskRepository.save(projectTask);
    }catch(Exception e){
            throw new BacklogNotFoundException("ProjectNotFound: " + projectIdentifier + " not found");
        }


    }


   public Iterable<ProjectTask> getProjectTasksByBacklogId(String id){
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }


    public ProjectTask getProjectTaskBySequenceId(String backlog_id, String pt_id) {
        Backlog backlog=backlogRepository.findByProjectIdentifier(backlog_id);
        if (backlog!=null){
            ProjectTask projectTask= projectTaskRepository.findByProjectSequence(pt_id);
            if (projectTask!=null)
                return projectTask;
            else
                throw new ProjectTaskException("Project Task with "+pt_id+" not found");

        }

        else
            throw new BacklogNotFoundException("ProjectNotFound:"+backlog_id+" not found");

    }
}
