import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private cepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  consultaCEP(evento: any) {
    const cep = evento.target.value;
    return this.cepService.getConsultaCep(cep).subscribe( resposta => {
      console.log(resposta);
    });
  }

  cadastrar(form: NgForm){
    if(form.valid){
      this.router.navigate(['./sucesso']);
    } else {
      alert('Formulário inválido!');
    }     
  }
}
