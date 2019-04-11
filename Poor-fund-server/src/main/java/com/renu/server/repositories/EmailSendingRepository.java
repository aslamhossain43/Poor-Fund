package com.renu.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.renu.server.models.EmailSending;

public interface EmailSendingRepository extends JpaRepository<EmailSending, Long>,JpaSpecificationExecutor<EmailSending> {
EmailSending getById(Long id);

}
