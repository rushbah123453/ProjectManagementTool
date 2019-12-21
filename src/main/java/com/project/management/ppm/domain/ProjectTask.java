package com.project.management.ppm.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class ProjectTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projectSequence;
    @NotBlank(message = "Summary cannot be blank")
    private String summary;
    private String acceptanceCriteria;
    private String status;
    private Integer priority;
    private Date dueDate;
    private Date createdAt;
    private Date updatedAt;
    @Column(updatable = false)
    private String projectIdentifier;


    @PrePersist
    private void onCreate(){
        this.createdAt=new Date();
    }

    @PreUpdate
    private void onUpdate(){
        this.updatedAt=new Date();
    }

    @Override
    public String toString() {
        return "ProjectTask{" +
                "id=" + id +
                ", projectSequence='" + projectSequence + '\'' +
                ", summary='" + summary + '\'' +
                ", acceptanceCriteria='" + acceptanceCriteria + '\'' +
                ", status='" + status + '\'' +
                ", priority=" + priority +
                ", dueDate=" + dueDate +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", projectIdentifier='" + projectIdentifier + '\'' +
                '}';
    }
}
