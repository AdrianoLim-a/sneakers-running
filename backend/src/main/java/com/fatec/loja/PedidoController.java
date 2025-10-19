package com.fatec.loja.controller;

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

import com.fatec.loja.entity.PedidoEntity;
import com.fatec.loja.repository.PedidoRepository;

@RestController
@CrossOrigin(origins = "*")
public class PedidoController {

    @Autowired
    PedidoRepository repository;

    @GetMapping("api/pedido/{codigo}")
    public ResponseEntity<PedidoEntity> carregar(@PathVariable int codigo) {
        Optional<PedidoEntity> obj = repository.findById(codigo);
        if (obj.isPresent()) {
            return ResponseEntity.ok(obj.get());
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @PostMapping("/api/pedido")
    public ResponseEntity<PedidoEntity> gravar(@RequestBody PedidoEntity obj) {
        PedidoEntity pedidoSalvo = repository.save(obj);
        return ResponseEntity.ok(pedidoSalvo);
    }

    @PutMapping("/api/pedido")
    public ResponseEntity<String> atualizar(@RequestBody PedidoEntity obj) {
        repository.save(obj);
        return ResponseEntity.ok("Pedido alterado com sucesso");
    }

    @DeleteMapping("/api/pedido/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo) {
        repository.deleteById(codigo);
        return ResponseEntity.ok("Pedido removido com sucesso");
    }

    @GetMapping("/api/pedidos")
    public ResponseEntity<List<PedidoEntity>> listar() {
        return ResponseEntity.ok(repository.findAll());
    }
}
