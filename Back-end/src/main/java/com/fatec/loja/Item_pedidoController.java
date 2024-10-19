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

import com.fatec.loja.entity.Item_pedidoEntity;
import com.fatec.loja.repository.Item_pedidoRepository;

@RestController
@CrossOrigin( origins = "*" )
public class Item_pedidoController {

    @Autowired
    Item_pedidoRepository repository;

    @GetMapping("api/item_pedido/{codigo}")
    public ResponseEntity<Item_pedidoEntity> carregar(@PathVariable int codigo) {

        Optional<Item_pedidoEntity> obj = repository.findById(codigo);
        if (obj.isPresent()) {
            return ResponseEntity.ok(obj.get());
        } else {
            return ResponseEntity.ok(null);
        }

    }

    @PostMapping("/api/item_pedido")
    public ResponseEntity<String> gravar(@RequestBody Item_pedidoEntity obj) {
        repository.save(obj);
        return ResponseEntity.ok("Item adicionado com sucesso");
    }

    @PutMapping("/api/item_pedido")
    public ResponseEntity<String> atualizar(@RequestBody Item_pedidoEntity obj) {
        repository.save(obj);
        return ResponseEntity.ok("Item alterado com sucesso");
    }

    @DeleteMapping("/api/item_pedido/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo) {
        repository.deleteById(codigo);
        return ResponseEntity.ok("Item removido com sucesso");
    }

    @GetMapping("/api/itens")
    public ResponseEntity<List<Item_pedidoEntity>> listar() {
        return ResponseEntity.ok(repository.findAll());
    }

}
