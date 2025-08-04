package com.bebakery.server.dto.position;

import com.bebakery.server.model.EmploymentType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CreatePositionRequest(
        @NotBlank String title,
        @NotNull double salary,
        @NotBlank String location,
        @NotBlank EmploymentType employmentType
) {
}
