package tes.spring.testeSpring.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tes.spring.testeSpring.model.Gestor;
import tes.spring.testeSpring.repository.GestorRepository;

@Service
public class GestorService {
    
    @Autowired
    private GestorRepository gestorRepository;

    // SELECT
    public List<Gestor> listarGestores() {
        return gestorRepository.findAll();
    }

    // SELECT WHERE
    public Optional<Gestor> buscarGestor(String cpf) {
        return gestorRepository.findById(cpf);
    }

    // INSERT
    public void cadastrarGestor(Gestor obj) {
        gestorRepository.save(obj);
    }

}
