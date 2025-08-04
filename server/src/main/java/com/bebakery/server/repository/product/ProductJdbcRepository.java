package com.bebakery.server.repository.product;

import com.bebakery.server.dto.product.CreateProductRequest;
import com.bebakery.server.dto.product.UpdateProductRequest;
import com.bebakery.server.errors.EntityNotFoundException;
import com.bebakery.server.model.Product;
import com.bebakery.server.service.product.ProductUpdateService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import static com.bebakery.server.service.product.ImageHandlerService.uploadImage;

@Repository
public class ProductJdbcRepository {

    private final JdbcTemplate jdbcTemplate;

    public ProductJdbcRepository(JdbcTemplate jdbcTemplate, ProductUpdateService updateService) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private static Product mapRowToProduct(ResultSet rs, int rowNum) throws SQLException {
        return new Product(
                rs.getLong("id"),
                rs.getString("title"),
                rs.getDouble("price"),
                rs.getString("image_path"),
                rs.getTimestamp("date_created").toLocalDateTime(),
                rs.getTimestamp("date_updated") != null
                        ? rs.getTimestamp("date_updated").toLocalDateTime()
                        : null
        );
    }

    public List<Product> findAll() {
        String sql = "select * from product";
        List<Product> products = jdbcTemplate.query(sql, ProductJdbcRepository::mapRowToProduct);
        return products;
    }

    public Optional<Product> findById(long id) {
        String sql = "select * from product where id = ?";
        try {
            Product product = jdbcTemplate.queryForObject(sql, new Object[]{id}, ProductJdbcRepository::mapRowToProduct);
            return Optional.of(product);
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }

    public void createProduct(CreateProductRequest request) throws IOException {
        String imagePath = uploadImage(request.image());
        String sql = "INSERT INTO Product (title, price, image_path, date_created) VALUES (?, ?, ?, NOW())";
        jdbcTemplate.update(sql, request.title(), request.price(), imagePath);
    }

    public void updateProduct(long id, UpdateProductRequest product, Product existingProduct) throws IOException {
        String sql = "UPDATE Product SET title = ?, price = ?, image_path = ?, date_updated = NOW() WHERE id = ?";
        Product updatedProduct = ProductUpdateService.updateProduct(id, product, existingProduct);
        int rows = jdbcTemplate.update(sql,
                updatedProduct.title(),
                updatedProduct.price(),
                updatedProduct.image(),
                id
        );
        if(rows != 1) {
            throw new EntityNotFoundException("Product with id " + id + " not found");
        }
    }

    public void deleteProduct(long id) {
        String sql = "DELETE FROM Product WHERE id = ?";
        int rows = jdbcTemplate.update(sql, id);
        if(rows != 1) {
            throw new EntityNotFoundException("Product with id " + id + " not found");
        }
    }
}
