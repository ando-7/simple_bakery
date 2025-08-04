package com.bebakery.server.controller;

import com.bebakery.server.dto.product.CreateProductRequest;
import com.bebakery.server.dto.product.UpdateProductRequest;
import com.bebakery.server.errors.EntityNotFoundException;
import com.bebakery.server.model.Product;
import com.bebakery.server.repository.product.ProductJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    private final ProductJdbcRepository productRepository;

    @Autowired
    public ProductController(ProductJdbcRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable long id) {
        return productRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found")
        );
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public void create(@ModelAttribute CreateProductRequest request) throws IOException {
        productRepository.createProduct(request);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    public void updateProduct(@PathVariable long id, @ModelAttribute UpdateProductRequest request) throws IOException {
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isEmpty()) {
            throw new EntityNotFoundException("Product with id " + id + " not found");
        }

        productRepository.updateProduct(id, request, productOptional.get());
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isEmpty()) {
            throw new EntityNotFoundException("Product with id " + id + " not found");
        }
        productRepository.deleteProduct(id);
    }

}
