package com.bebakery.server.service.position;

import com.bebakery.server.dto.position.CreatePositionRequest;
import com.bebakery.server.model.Position;
import com.bebakery.server.repository.position.PositionJdbcRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;

@Service
public class PositionCreationService {
    private final PositionJdbcRepository positionRepository;

    public PositionCreationService(PositionJdbcRepository positionRepository) {
        this.positionRepository = positionRepository;
    }

    public void createPosition(CreatePositionRequest request) {
        Position position = new Position(
                0L,
                request.title(),
                request.salary(),
                request.location(),
                request.employmentType(),
                LocalDateTime.now(),
                null
        );
        positionRepository.createPosition(position);
    }
}
