package com.bebakery.server.model;

import java.time.LocalDateTime;

public record Position (
        long id,
        String title,
        double salary,
        String location,
        EmploymentType employmentType,
        LocalDateTime dateCreated,
        LocalDateTime dateUpdated
) {
}
