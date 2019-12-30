package com.project.management.ppm.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.sun.glass.ui.View;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User implements UserDetails {

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

    @Transient // Dont want to persist confirmPassword , As encrypted password is already persisted
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)   // Dont want to see confirmPassword in response
    private String confirmPassword;

    private Date createdAt;
    private Date updatedAt;

    //OneToMany user to project
    @OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.REFRESH,orphanRemoval = true,mappedBy = "user")
    private List<Project> projects=new ArrayList<>();


    @PrePersist
    private void onCreate(){
        this.createdAt=new Date();
    }

    @PreUpdate
    private void onUpdate(){
        this.updatedAt=new Date();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    //UserDetail Method
    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }


    @Override
    public String getPassword() {
        return password;
    }


    @Override
    public String getUsername() {
        return username;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return true;
    }
}
