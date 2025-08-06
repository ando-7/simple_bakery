package com.bebakery.server.dto.product;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.web.multipart.MultipartFile;

public record UpdateProductDto(
        @Id long id,
        @NotBlank String title,
        @NotNull Double price,
        @NotNull MultipartFile image
) {

}
