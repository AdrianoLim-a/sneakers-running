import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { Item } from '../model/item';
import { Pedido } from '../model/pedido';
import { ItemPedidoService } from '../service/item-pedido.service';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent {

  public lista: Item[] = [];
  public mensagem: string = "";
  public totalCesta: number = 0;
  public compraRealizada: boolean = false;
  public mensagemCompra: string = "";
  public pedido : Pedido = new Pedido;
  public cliente: Cliente = new Cliente; 

  constructor(private itemService: ItemPedidoService, private pedidoService: PedidoService) {
    let json = localStorage.getItem("cesta");
    if (json == null) {
      this.mensagem = "Você ainda não adicionou itens";
    } else {
      this.lista = JSON.parse(json);
      for (let item of this.lista) {
        this.totalCesta = this.totalCesta + item.valorTotal;
      }
    }
  }


  ngOnInit(): void {
    this.loadCesta();
    this.loadCliente();
  }

  loadCesta(): void {
    let json = localStorage.getItem("cesta");
    this.totalCesta = 0; 
    if (json == null) {
      this.mensagem = "Você ainda não adicionou itens";
    } else {
      this.lista = JSON.parse(json);
      for (let item of this.lista) {
        this.totalCesta += item.valorTotal;
      }
    }
  }

  loadCliente(): void {
    let clienteJson = localStorage.getItem("cliente");
    if (clienteJson) {
      this.cliente = JSON.parse(clienteJson);
    } else {
      this.mensagem = "Cliente não encontrado";
    }
  }

  limpar() {
    this.lista = [];
    localStorage.removeItem("cesta");
  }

  comprar() {
    if (this.lista.length === 0) {
      this.mensagem = "Não há itens na cesta para comprar";
      return;
    }

    if (!this.cliente) {
      this.mensagem = "Código do cliente não encontrado";
      return;
    }

    
    const pedido: Pedido = {
      codigoCliente: this.cliente.codigo,
      total: this.totalCesta,
      status: "em processamento",
      entrega: "não realizada",
      codigo: 0,
      dataPedido: ""
    };

    this.pedidoService.gravar(pedido).subscribe({
      next: (pedidoCriado) => {
        console.log("Pedido criado com sucesso:", pedidoCriado);

 
        for (let item of this.lista) {
          item.codigoPedido = pedidoCriado.codigo;
          this.itemService.gravar(item).subscribe({
            next: () => {
              console.log("Item gravado com sucesso:", item);
            },
            error: (error) => {
              console.error("Erro ao gravar item:", error);
            }
          });
        }

        
        this.limpar();
        this.compraRealizada = true;
        this.mensagemCompra = "Compra realizada com sucesso!";
      },
      error: (error) => {
        console.error("Erro ao criar pedido:", error);
        this.mensagemCompra = "Erro ao realizar a compra!";
      }
    });
  }
}
