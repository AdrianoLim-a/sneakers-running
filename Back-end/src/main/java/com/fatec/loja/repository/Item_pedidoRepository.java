package com.fatec.loja.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fatec.loja.entity.Item_pedidoEntity;

@Repository
public interface Item_pedidoRepository extends JpaRepository<Item_pedidoEntity, Integer>,
        JpaSpecificationExecutor<Item_pedidoRepository> {

}
