package com.bebakery.server.model;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public record Product(
        @Id long id,
        String title,
        Double price,
        String image,
        LocalDateTime createdDate,
        LocalDateTime updatedDate
) {
}
