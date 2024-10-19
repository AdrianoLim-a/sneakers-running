import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from '../model/item';
import { Produto } from '../model/produto';
import { ItemPedidoService } from '../service/item-pedido.service';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  
  public lista: Produto[] = [];
  public mensagem:String;
  public constructor(private produtoService: ProdutoService, private itemService:ItemPedidoService ) {
  this.mensagem = "";
  this.produtoService.listar().subscribe(
        (data: Produto[]) => {    
          if(data==null){
            this.mensagem = "Produtos não encontrados!";
          } else {        
            this.lista = data;
          }
        } , 
        (error) => {
          this.mensagem = "ocorreu um erro no carregamento da vitrine !"+ error;
        }
      )        
  
    }
  
    

   

  
 /* ngOnInit(): void {
    this.lista = this.produtoService.getListaProdutos();
  }*/
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