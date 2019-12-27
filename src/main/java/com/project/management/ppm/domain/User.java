package com.project.management.ppm.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @NotBlank(message = "username cannot be blank")
    @Email(message = "username should be email")
    private String username;

    @NotBlank(message = "fullName cannot be blank")
    private String fullName;

    @NotBlank(message = "password cannot be blank")
    private String password;

    @Transient
    private String confirmPassword;

    private Date createdAt;
    private Date updatedAt;

    //OneToMany user to project


    @PrePersist
    private void onCreate(){
        this.createdAt=new Date();
    }

    @PreUpdate
    private void onUpdate(){
        this.updatedAt=new Date();
    }





}
