package com.bebakery.server.repository.product;

import com.bebakery.server.model.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// Can be alternatively used for DB requests
public interface ProductRepository extends CrudRepository<Product, Long> {
    List<Product> findAllByTitleContains(String title);
}
