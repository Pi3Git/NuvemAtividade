package tes.spring.testeSpring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "gestor")
public class Gestor {
    
    @Id
    @Column(name = "ges_cpf")
    private String cpf;

    @Column(name = "ges_nome")
    private String nome;

    @Column(name = "ges_email")
    private String email;

    @Column(name = "ges_senha")
    private String senha;

    
    // Construtores
    public Gestor(){}

    public Gestor(String cpf, String nome, String email, String senha) {
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

}
