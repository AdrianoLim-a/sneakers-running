import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';
@Injectable({
  providedIn: 'root'
})
export class ItemPedidoService {

  constructor(private http : HttpClient) { }

  public gravar(obj: Item): Observable<string> {
    return this.http.post<string>("http://localhost:8090/api/item_pedido", obj);
  }

  public remover(obj: Item) :string{    
    let mensagem  = "";
    this.http.delete<String>("http://localhost:8090/api/item_pedido/"+ obj.codigo).subscribe({
      next: data =>
      {
        mensagem =  "Item removido com sucesso!";
      },
      error: error => {
        console.log(error);
        mensagem =  "Ocorreu um erro durante a gravação!";
      }
    });    
    return mensagem;   
  } 
  
  
  public carregar(codigo: number): Observable<Item>{
    return this.http.get<Item>("http://localhost:8090/api/item_pedido/"+codigo);         
  }

  public listar() :  Observable<Item[]>{    
      return this.http.get<Item[]>("http://localhost:8090/api/itens");      
  }

}