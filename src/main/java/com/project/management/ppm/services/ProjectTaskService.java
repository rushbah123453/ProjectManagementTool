package com.project.management.ppm.services;

import com.project.management.ppm.domain.ProjectTask;

public interface ProjectTaskService {

    public ProjectTask addProject(String projectIdentifier,ProjectTask projectTask);

    public ProjectTask getProjectTaskBySequenceId(String backlog_id, String pt_id);
}
