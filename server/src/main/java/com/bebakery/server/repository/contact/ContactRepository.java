package com.bebakery.server.repository.contact;

import com.bebakery.server.model.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, Long> {}
