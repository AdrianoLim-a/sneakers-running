import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  
  constructor(private http : HttpClient) {}
  
  public gravar(obj : Produto) : string{    
    let mensagem  = "";
    this.http.post<String>("http://localhost:8080/api/produto", obj).subscribe({
    next: data =>
    {
      mensagem =  "Registro salvo com sucesso !";
    },
    error: error => {
      console.log(error);
      mensagem =  "Ocorreu um erro durante a gravação!";
    }
  });    
  return mensagem;
}

public alterar(obj: Produto): string{
  let mensagem  = "";
  this.http.put<String>("http://localhost:8080/api/produto", obj).subscribe({
    next: data =>
    {
      mensagem =  "Registro alterado com sucesso !";
    },
    error: error => {
      console.log(error);
      mensagem =  "Ocorreu um erro durante a gravação!";
    }
  });    
  return mensagem;
} 

public remover(obj: Produto) :string{    
  let mensagem  = "";
  this.http.delete<String>("http://localhost:8080/api/produto/"+ obj.codigo).subscribe({
    next: data =>
    {
      mensagem =  "Registro removido com sucesso !";
    },
    error: error => {
      console.log(error);
      mensagem =  "Ocorreu um erro durante a gravação!";
    }
  });    
  return mensagem;   
} 


public carregar(codigo: string): Observable<Produto>{
  return this.http.get<Produto>("http://localhost:8080/api/produto/"+codigo);         
}

public listar() :  Observable<Produto[]>{    
    return this.http.get<Produto[]>("http://localhost:8080/api/produtos");      
}

public pesquisar(busca: String) :  Observable<Produto[]>{    
  return this.http.get<Produto[]>("http://localhost:8080/api/produto/busca/"+ busca);      
}


}
