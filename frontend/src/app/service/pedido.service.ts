import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http : HttpClient) { }

  public gravar(obj: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>("http://localhost:8080/api/pedido", obj);
  }

  public remover(obj: Pedido) :string{    
    let mensagem  = "";
    this.http.delete<String>("http://localhost:8080/api/pedido/"+ obj.codigo).subscribe({
      next: data =>
      {
        mensagem =  "Pedido excluido com sucesso!";
      },
      error: error => {
        console.log(error);
        mensagem =  "Ocorreu um erro durante a gravação!";
      }
    });    
    return mensagem;   
  } 
  
  
  public carregar(codigo: number): Observable<Pedido>{
    return this.http.get<Pedido>("http://localhost:8080/api/pedido/"+codigo);         
  }

  public listar() :  Observable<Pedido[]>{    
      return this.http.get<Pedido[]>("http://localhost:8080/api/pedidos");      
  }

}
