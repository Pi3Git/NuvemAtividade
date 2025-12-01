package tes.spring.testeSpring.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tes.spring.testeSpring.model.Cliente;
import tes.spring.testeSpring.repository.ClienteRepository;

@Service
public class ClienteService {
    
    @Autowired
    private ClienteRepository clienteRepository;

    // SELECT
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    // SELECT WHERE
    public Optional<Cliente> buscarCliente(Integer id) {
        return clienteRepository.findById(id);
    }

    // INSERT
    public void cadastrarCliente(Cliente obj) {
        clienteRepository.save(obj);
    }

}
