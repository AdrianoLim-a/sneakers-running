package com.fatec.loja;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.loja.entity.ClienteEntity;
import com.fatec.loja.repository.ClienteRepository;


@RestController
@CrossOrigin( origins = "*" )
public class ClienteController {
    @Autowired
    ClienteRepository repository;
   
    @GetMapping("/api/cliente/{codigo}")
    public ResponseEntity<ClienteEntity> carregar(@PathVariable int codigo){
       Optional<ClienteEntity> obj = repository.findById(codigo);
       if(obj.isPresent()) {
            return ResponseEntity.ok(obj.get());
       } else {
            return ResponseEntity.ok(null);
       }
    }

    @PostMapping("/api/cliente")
    public ResponseEntity<String> gravar(@RequestBody ClienteEntity obj){
        repository.save(obj);
        return ResponseEntity.ok("Cliente gravado com sucesso"); 
    }
    
    
    @PutMapping("/api/cliente")
    public ResponseEntity<String> atualizar(@RequestBody ClienteEntity obj){
        repository.save(obj);
        return ResponseEntity.ok("Cliente alterado com sucesso");
    }

    @DeleteMapping("/api/cliente/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo){
        repository.deleteById(codigo);
        return ResponseEntity.ok("cliente removido com sucesso");
    }


    @GetMapping("/api/clientes")
    public ResponseEntity<List<ClienteEntity>> listar(){
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping("/api/cliente/login")
    public ResponseEntity<ClienteEntity> 
    fazerLogin(@RequestBody ClienteEntity obj){
        Optional<ClienteEntity> retorno = 
                repository.fazerLogin(obj.getEmail(), obj.getSenha());
        if(retorno.isPresent()){
            return ResponseEntity.ok(retorno.get());
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @GetMapping("/api/cliente/esqueci/{email}")
    public ResponseEntity<ClienteEntity> esqueciSenha(@PathVariable String email){
       Optional<ClienteEntity> obj = repository.esqueciSenha(email);
       if (obj.isPresent()) {
        return ResponseEntity.ok(obj.get());
       } else {
            return ResponseEntity.ok(null);
       }
    }
}