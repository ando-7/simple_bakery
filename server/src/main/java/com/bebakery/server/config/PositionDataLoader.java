package com.bebakery.server.config;

import com.bebakery.server.model.Position;
import com.bebakery.server.repository.position.PositionJdbcRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

//Adds predefined positions in DB when starting the server (for testing reasons, can be removed in production)

@Component
public class PositionDataLoader implements CommandLineRunner {

    private final PositionJdbcRepository repository;
    private final ObjectMapper objectMapper;

    public PositionDataLoader(PositionJdbcRepository repository, ObjectMapper objectMapper) {
        this.repository = repository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        try (InputStream inputStream = TypeReference.class.getResourceAsStream("/data/positionExamples.json")) {
            List<Position> positions = objectMapper.readValue(inputStream, new TypeReference<List<Position>>() {});
            for (Position position : positions) {
                repository.createPosition(position);
            }
        }
    }
}
