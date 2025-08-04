package com.bebakery.server.repository.position;

import com.bebakery.server.errors.EntityNotFoundException;
import com.bebakery.server.model.EmploymentType;
import com.bebakery.server.model.Position;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public class PositionJdbcRepository {
    private final JdbcTemplate jdbcTemplate;

    public PositionJdbcRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private static Position mapRowToPosition(ResultSet rs, int rowNum) throws SQLException {
        return new Position(rs.getLong("id"),
                rs.getString("title"),
                rs.getInt("salary"),
                rs.getString("location"),
                EmploymentType.valueOf(rs.getString("employment_type")),
                rs.getTimestamp("date_created").toLocalDateTime(),
                rs.getTimestamp("date_updated") != null
                        ? rs.getTimestamp("date_updated").toLocalDateTime()
                        : null
                );
    }

    public List<Position> findAll() {
        String sql = "SELECT * FROM Position";
        List<Position> positions = jdbcTemplate.query(sql, PositionJdbcRepository::mapRowToPosition);
        return positions;
    }

    public void createPosition(Position position) {
        String sql = "INSERT INTO Position (title, salary, location, employment_type, date_created) VALUES (?, ?, ?, ?, NOW())";
        jdbcTemplate.update(sql,
                position.title(),
                position.salary(),
                position.location(),
                position.employmentType().name()
        );
    }

    public void updatePosition(long id, Position position) {
        String sql = "UPDATE Position SET title=?, salary=?, location=?, employment_type=?, date_updated=NOW() WHERE id=?";
        int rowsUpdated =  jdbcTemplate.update(sql,
                position.title(),
                position.salary(),
                position.location(),
                position.employmentType().name(),
                id
        );
        if(rowsUpdated == 0) {
            throw new EntityNotFoundException("Position with id " + id + " not found");
        }
    }

    public void deletePosition(long id) {
        String sql = "DELETE FROM Position WHERE id=?";
        int rowsAffected = jdbcTemplate.update(sql, id);
        if (rowsAffected == 0) {
            throw new EntityNotFoundException("Position with id " + id + " not found");
        }
    }

    public Optional<Position> findById(long id) {
        String sql = "SELECT * FROM Position WHERE id=?";
        try {
            Position position = jdbcTemplate.queryForObject(sql, new Object[]{id}, PositionJdbcRepository::mapRowToPosition);
            return Optional.of(position);
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }
}
