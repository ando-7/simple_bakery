package com.bebakery.server.controller;

import com.bebakery.server.dto.contact.CreateContactDto;
import com.bebakery.server.dto.contact.UpdateContactDto;
import com.bebakery.server.errors.EntityNotFoundException;
import com.bebakery.server.model.Contact;
import com.bebakery.server.repository.contact.ContactRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/contacts")
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @GetMapping("")
    public List<Contact> getAllContacts() {
        return (List<Contact>) contactRepository.findAll();
    }

    @GetMapping("/{id}")
    public Contact getContact(@PathVariable long id) {
        return contactRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Contact not found")
        );
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public void addContact(@ModelAttribute CreateContactDto dto) {
        Contact contact = new Contact(
                dto.name(),
                dto.email(),
                dto.phone(),
                dto.message(),
                LocalDateTime.now(),
                false
        );
        contactRepository.save(contact);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    public void updateContact(@Valid @RequestBody UpdateContactDto dto, @PathVariable long id) {
        Contact  existingContact= contactRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Contact with id " + id + " not found")
        );

        existingContact.setName(dto.name());
        existingContact.setEmail(dto.email());
        existingContact.setPhone(dto.phone());
        existingContact.setMessage(dto.message());
        existingContact.setDateCreated(LocalDateTime.now());
        existingContact.setHandled(dto.handled());

        contactRepository.save(existingContact);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable long id) {
        Optional<Contact> optionalContact = contactRepository.findById(id);

        if (optionalContact.isEmpty()) {
            throw new EntityNotFoundException("Contact with id " + id + " not found");
        }
        contactRepository.deleteById(id);
    }

}
