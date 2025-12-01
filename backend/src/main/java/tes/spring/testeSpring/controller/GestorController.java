package tes.spring.testeSpring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tes.spring.testeSpring.model.Gestor;
import tes.spring.testeSpring.services.GestorService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/gestor")
public class GestorController {
    
    @Autowired
    private GestorService gestorService;


    @GetMapping
    public List<Gestor> listaGestores() {
        return gestorService.listarGestores();
    }

    @GetMapping("/{cpf}")
    public Optional<Gestor> buscarGestor(@PathVariable String cpf) {
        return gestorService.buscarGestor(cpf);
    }

    @PostMapping
    public void cadastrarGestor(@RequestBody Gestor obj) {
        gestorService.cadastrarGestor(obj);
    }

}
