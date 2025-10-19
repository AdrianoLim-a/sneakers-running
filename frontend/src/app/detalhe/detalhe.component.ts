import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../model/item';
import { Produto } from '../model/produto';
import { ItemPedidoService } from '../service/item-pedido.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  
    public mensagem: String = "";
    public obj : Produto = new Produto();
    public item : Item = new Item(); 

  
    public constructor(private service: ProdutoService, private itemService:ItemPedidoService){
      let codigo = localStorage.getItem("detalhe");
      if(codigo==null){
        this.mensagem = "produto não encontrado!!!";
      } else {
          this.service.carregar(codigo).subscribe(
          (data: Produto) => {    
            if(data==null){
              this.mensagem = "Produto não encontrado!";
            } else {        
              this.obj = data;
            }
          } , 
          (error) => {
            this.mensagem = "ocorreu um erro no carregamento da vitrine !"+ error;
          }
        )        
      } 
    }
    public comprar(produto: Produto){
      let novo: Item = new Item();
      novo.codigoProduto = produto.codigo;
      novo.produto = produto.nome;
      novo.quantidade = 1;
      novo.valorTotal = produto.valor;
    
      let lista : Item[] = [];
      let json = localStorage.getItem("cesta");
      if(json == null){
        lista.push(novo);  
        console.log(JSON.stringify(lista));
      } else {
        lista = JSON.parse(json);
        lista.push(novo);
      }
    
      localStorage.setItem("cesta", JSON.stringify(lista));
      window.location.href = "./cesta";
    }
  
}
