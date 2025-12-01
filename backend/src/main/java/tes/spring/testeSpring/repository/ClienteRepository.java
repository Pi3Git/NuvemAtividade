package tes.spring.testeSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tes.spring.testeSpring.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {}
