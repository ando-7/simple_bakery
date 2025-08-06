package com.bebakery.server.model;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Contact{
    @Id private Long id;
    private String name;
    private String email;
    private String phone;
    private String message;
    private LocalDateTime dateCreated;
    private boolean handled;

    public Contact(){};

    public Contact(String name, String email, String phone, String message, LocalDateTime dateCreated, boolean handled) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message;
        this.dateCreated = dateCreated;
        this.handled = handled;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMessage() {
        return message;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isHandled() {
        return handled;
    }

    public void setHandled(boolean handled) {
        this.handled = handled;
    }
}
