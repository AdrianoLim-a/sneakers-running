import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../model/item';
import { Produto } from '../model/produto';
import { ItemPedidoService } from '../service/item-pedido.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})

export class BuscaComponent  {
  public mensagem:string;
  public lista: Produto[] = []; 
  public busca:string = "";



  public constructor(private service: ProdutoService, private itemService:ItemPedidoService){
    this.mensagem = "nenhuma resultado para sua pesquisa";
  }

  public pesquisar(){
    this.service.pesquisar(this.busca).subscribe(
      (data: Produto[]) => {    
        if(data==null){
          this.mensagem = "Produtos não encontrados!";
        } else {        
          this.mensagem = "resultado da pesquisa por:"+ this.busca;
          this.lista = data;
        }
      } , 
      (error) => {
        this.mensagem = "ocorreu um erro no carregamento da vitrine !"+ error;
      }
    )        
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
  
  public abrirDetalhe(produto: Produto){
    localStorage.setItem("detalhe",JSON.stringify(produto.codigo));
    window.location.href="./detalhe";
  }

}

