package com.bebakery.server.service.product;

import com.bebakery.server.dto.product.UpdateProductRequest;
import com.bebakery.server.model.Product;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;

import static com.bebakery.server.service.product.ImageHandlerService.uploadImage;


@Service
public class ProductUpdateService {

    
    public static Product updateProduct(Long id, UpdateProductRequest request, Product existingProduct) throws IOException {
        String imagePath = uploadImage(request.image());

        return new Product(
                id,
                request.title() == null || request.title().isEmpty()
                        ? existingProduct.title()
                        : request.title(),
                request.price() == null || request.price() <= 0
                        ? existingProduct.price()
                        : request.price(),
                imagePath.isEmpty()
                        ? existingProduct.image()
                        : imagePath,
                existingProduct.createdDate(),
                LocalDateTime.now()
        );

    }
}