package com.bebakery.server.controller;

import com.bebakery.server.errors.EntityNotFoundException;
import com.bebakery.server.model.Position;
import com.bebakery.server.repository.position.PositionJdbcRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/positions")
public class PositionController {
    private final PositionJdbcRepository positionRepository;

    @Autowired
    public PositionController(PositionJdbcRepository positionRepository) {
        this.positionRepository = positionRepository;
    }

    @GetMapping("")
    public List<Position> getAll() {
        return positionRepository.findAll();
    }

    @GetMapping("/{id}")
    public Position getById(@PathVariable int id) {
        return positionRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Position not found")
        );
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public void create(@Valid @RequestBody Position position) {
        positionRepository.createPosition(position);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    public void updatePosition(@PathVariable long id, @Valid @RequestBody Position position) {
        Optional<Position> positionOptional = positionRepository.findById(id);
        if (positionOptional.isEmpty()) {
            throw new EntityNotFoundException("Position with id " + id + " not found");
        }

        positionRepository.updatePosition(id, position);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {
        Optional<Position> positionOptional = positionRepository.findById(id);
        if (positionOptional.isEmpty()) {
            throw new EntityNotFoundException("Position with id " + id + " not found");
        }
        positionRepository.deletePosition(id);
    }
}
