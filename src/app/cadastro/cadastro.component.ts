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

  consultaCEP(evento: any, formulario: NgForm) {
    const cep = evento.target.value;

    if(cep !== ''){
        this.cepService.getConsultaCep(cep).subscribe( resposta => {
          console.log(resposta);
          this.populandoEndereco(resposta, formulario);
      });
    }
  }

  //Os campos do "patchValue", são referentes aos campos "name" no template html. Sem o campo/tag "name", nao funciona
  populandoEndereco(dados: any, formulario: NgForm){
    formulario.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

  cadastrar(form: NgForm){
    if(form.valid){
      this.router.navigate(['./sucesso']);
    } else {
      alert('Formulário inválido!');
    }     
  }
}
