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

import com.fatec.loja.entity.ProdutoEntity;
import com.fatec.loja.repository.ProdutoRepository;


@RestController
@CrossOrigin( origins = "*" )
public class ProdutoController {

    @Autowired
    ProdutoRepository repository;

    @GetMapping("api/produto/{codigo}")
    public ResponseEntity<ProdutoEntity> carregar(@PathVariable int codigo) {

        Optional<ProdutoEntity> obj = repository.findById(codigo);
        if (obj.isPresent()) {
            return ResponseEntity.ok(obj.get());
        } else {
            return ResponseEntity.ok(null);
        }

    }

    @PostMapping("/api/produto")
    public ResponseEntity<String> gravar(@RequestBody ProdutoEntity obj) {
        repository.save(obj);
        return ResponseEntity.ok("Produto gravado com sucesso");
    }

    @PutMapping("/api/produto")
    public ResponseEntity<String> atualizar(@RequestBody ProdutoEntity obj) {
        repository.save(obj);
        return ResponseEntity.ok(" Produto alterado com sucesso");
    }

    @DeleteMapping("/api/produto/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo) {
        repository.deleteById(codigo);
        return ResponseEntity.ok("Produto removido com sucesso");
    }

    @GetMapping("/api/produtos")
    public ResponseEntity<List<ProdutoEntity>> listar() {
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/api/produto/busca/{pesquisa}")
    public ResponseEntity<List<ProdutoEntity>> buscar(@PathVariable String pesquisa){
        String aux = '%'+ pesquisa +'%';
        List<ProdutoEntity> lista = repository.buscar(aux);
        return ResponseEntity.ok(lista);
    }

}
