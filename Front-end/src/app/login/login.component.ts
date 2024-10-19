import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public mensagem: String = "";
  public obj: Cliente = new Cliente();

  constructor(private service : ClienteService){
    
  }

  public entrar(){
    this.service.login(this.obj).subscribe(
     (data: Cliente) => {
      if(data.codigo!=null){

      localStorage.setItem("cliente",JSON.stringify(data) );
      window.location.href="./cadastro";
      }else{
        this.mensagem ="Email ou senha invalidos! ";
      }
     },
     (error) => {
      this.mensagem = " Ocorreu um erro, tente novamente mais tarde!";
      console.log(error);
     },

    );
    
    if(this.obj.email==""){
      localStorage.setItem("", "");
      localStorage.clear();
      window.location.href="./cadastro";
    } else {
      this.mensagem = "Email ou senha invalidos!!!";
    }
  }
}
