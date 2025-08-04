package com.bebakery.server.service.product;

import com.bebakery.server.repository.product.ProductJdbcRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class ImageHandlerService {

    private final ProductJdbcRepository productRepository;
    private static final String UPLOAD_DIR = "uploads/images/";

    public ImageHandlerService(ProductJdbcRepository productRepository) {
        this.productRepository = productRepository;
    }

    public static String uploadImage(MultipartFile file) throws IOException {
        try {
            if(file == null || file.isEmpty()) {
                return "";
            }

            File dir = new File(UPLOAD_DIR);
            if(!dir.exists()) dir.mkdirs();

            // Unique filename
            String uniqueFileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            Path filePath = Paths.get(UPLOAD_DIR, uniqueFileName);
            file.transferTo(filePath);

            return UPLOAD_DIR + uniqueFileName;
        } catch (IOException e) {
            throw new RuntimeException("Failed to save image", e);
        }

    }

}
