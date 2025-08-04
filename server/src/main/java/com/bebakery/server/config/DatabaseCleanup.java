package com.bebakery.server.config;

import jakarta.annotation.PreDestroy;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

// Deletes data in DB after termination (for testing reasons, can be safely removed in production stage)
@Component
public class DatabaseCleanup {
    private final JdbcTemplate jdbcTemplate;

    public DatabaseCleanup(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PreDestroy
    public void clearDatabase() {
        jdbcTemplate.execute("DELETE FROM applicant");
        jdbcTemplate.execute("ALTER SEQUENCE applicant_id_seq RESTART WITH 1");

        jdbcTemplate.execute("DELETE FROM position");
        jdbcTemplate.execute("ALTER SEQUENCE position_id_seq RESTART WITH 1");

        System.out.println("Database cleaned up on shutdown.");
    }
}
