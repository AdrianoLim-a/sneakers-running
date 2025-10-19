import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  public obj : Cliente = new Cliente();

  public mensagem : String = "";
  public constructor (){
    let json = localStorage.getItem("cliente");
    if(json==null){
      this.mensagem = "Você ainda não tem cadastro!!!";
    } else {
      this.obj = JSON.parse(json);
      this.mensagem = "Seja bem vindo " + this.obj.nome;
    }
  }

  fazerLogout(){
    localStorage.removeItem("clientes")
    localStorage.clear();
    this.mensagem = "";
  }

}
