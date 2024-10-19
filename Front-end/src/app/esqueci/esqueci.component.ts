import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
@Component({
  selector: 'app-esqueci',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './esqueci.component.html',
  styleUrl: './esqueci.component.css'
})
export class EsqueciComponent {
  public mensagem:string = "";
  public email:string = "";


  constructor(private service : ClienteService){
    
  }

  public esqueciSenha(){
    this.service.esqueci(this.email).subscribe(
      (data: Cliente) => {
        if (data == null) {
          this.mensagem = "Email não cadastrado!";
          this.limpar();
        } else {
          this.mensagem = "Enviamos um email com link para recuperação de senha para " +this.email;
          this.limpar();
        }
      },
      (error) => {
        this.mensagem = "Ocorreu um erro ao tentar recuperar a senha. Por favor, tente novamente mais tarde."+error;
      }
    );
  }
  
  limpar(){
    this.email = "";
  }
}
