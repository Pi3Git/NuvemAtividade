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

import tes.spring.testeSpring.model.Cliente;
import tes.spring.testeSpring.services.ClienteService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/cliente")
public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;


    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteService.listarClientes();
    }

    @GetMapping("/{id}")
    public Optional<Cliente> buscarCliente(@PathVariable Integer id) {
        return clienteService.buscarCliente(id);
    }

    @PostMapping
    public void cadastrarCliente(@RequestBody Cliente obj) {
        clienteService.cadastrarCliente(obj);
    }

}
