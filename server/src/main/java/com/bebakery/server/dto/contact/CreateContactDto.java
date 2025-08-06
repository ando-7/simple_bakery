package com.bebakery.server.dto.contact;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CreateContactDto(
      @NotBlank String name,
      @Email String email,
      @NotBlank String phone,
      @NotBlank String message
) {}
