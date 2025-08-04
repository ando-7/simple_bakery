package com.bebakery.server.dto.position;

import com.bebakery.server.model.EmploymentType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;

public record UpdatePositionRequest(
        @Id long id,
        @NotBlank String title,
        @NotNull double salary,
        @NotBlank String location,
        @NotBlank EmploymentType employmentType
) {}
