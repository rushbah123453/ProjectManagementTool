package com.project.management.ppm.services;

import com.project.management.ppm.domain.Backlog;
import com.project.management.ppm.domain.Project;
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

    @Autowired
    private ProjectServiceImpl projectService;


    @Override
    public ProjectTask addProject(String projectIdentifier, ProjectTask projectTask,String userName) {

//exception
        Backlog backlog = projectService.getProjectById(projectIdentifier,userName).getBacklog();
        projectTask.setBacklog(backlog);
        projectTask.setProjectIdentifier(projectIdentifier);
        Integer backlogSequence = backlog.getPTSeequence();
        backlogSequence++;
        backlog.setPTSeequence(backlogSequence);
        projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);

        if (projectTask.getStatus() == "" || projectTask.getStatus() == null)
            projectTask.setStatus("TO_DO");

        if (projectTask.getPriority() == null || projectTask.getPriority() == 0)
            projectTask.setPriority(3);

        return projectTaskRepository.save(projectTask);



    }


   public Iterable<ProjectTask> getProjectTasksByBacklogId(String id,String userName){
        projectService.getProjectById(id,userName);
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }


    public ProjectTask getProjectTaskBySequenceId(String backlog_id, String pt_id,String userName) {


      projectService.getProjectById(backlog_id,userName);

            ProjectTask projectTask= projectTaskRepository.findByProjectSequence(pt_id);
            if (projectTask!=null)
                return projectTask;
            else
                throw new ProjectTaskException("Project Task with "+pt_id+" not found");


    /*    Backlog backlog=backlogRepository.findByProjectIdentifier(backlog_id);
        if (backlog!=null){
            ProjectTask projectTask= projectTaskRepository.findByProjectSequence(pt_id);
            if (projectTask!=null)
                return projectTask;
            else
                throw new ProjectTaskException("Project Task with "+pt_id+" not found");

        }

        else
            throw new BacklogNotFoundException("ProjectNotFound:"+backlog_id+" not found");*/


    }

    @Override
    public ProjectTask updateProjectTaskByProjectSequenceId(ProjectTask updatedprojectTask, String backlog_id, String pt_id,String userName) {


        ProjectTask projectTask=getProjectTaskBySequenceId(backlog_id,pt_id,userName);
        projectTask=updatedprojectTask;
       return projectTaskRepository.save(projectTask);

    }

    @Override
    public void deleteProjectTaskByProjectSequenceId(String backlog_id, String pt_id,String userName) {
        ProjectTask projectTask=getProjectTaskBySequenceId(backlog_id,pt_id,userName);
        projectTaskRepository.delete(projectTask);

    }
}
