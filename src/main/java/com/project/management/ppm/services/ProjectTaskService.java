package com.project.management.ppm.services;

import com.project.management.ppm.domain.ProjectTask;

public interface ProjectTaskService {

    public ProjectTask addProject(String projectIdentifier,ProjectTask projectTask,String userName);

    public ProjectTask getProjectTaskBySequenceId(String backlog_id, String pt_id,String userName);

    ProjectTask updateProjectTaskByProjectSequenceId(ProjectTask projectTask, String backlog_id, String pt_id,String userName);

   public void deleteProjectTaskByProjectSequenceId(String backlog_id, String pt_id,String userName);

    public Iterable<ProjectTask> getProjectTasksByBacklogId(String id,String userName);
}
