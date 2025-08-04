package com.bebakery.server.repository.position;

import com.bebakery.server.model.Position;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// Can be alternatively used for DB requests
public interface PositionRepository extends CrudRepository<Position, Long> {
    List<Position> findAllByTitleContains(String title);
}
