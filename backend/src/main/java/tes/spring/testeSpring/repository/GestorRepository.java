package tes.spring.testeSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tes.spring.testeSpring.model.Gestor;

@Repository
public interface GestorRepository extends JpaRepository<Gestor, String> {}
