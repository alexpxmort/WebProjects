import { OportunidadeService } from './../oportunidade.service';
import { Component, OnInit } from '@angular/core';
import { MessageService} from 'primeng/api';


@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {


  oportunidade = {};
  oportunidades = [];


  constructor(private oportunidadeService: OportunidadeService, private messageService: MessageService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.oportunidadeService.listar().subscribe(resp => this.oportunidades = <any> resp);
  }

  adicionar() {
    this.oportunidadeService.adicionar(this.oportunidade).subscribe(() => {
      this.oportunidade = {};
      this.consultar();
      this.messageService.add({
        severity: 'success',
        summary: 'Oportunidade Adicionada com Sucesso'
    }); } ,
    resp => {
      let msg = ' Erro inesperado,Tente Novamente';

      if (resp.error.message) {
        msg = resp.error.message;

      }

      this.messageService.add({
        severity: 'error',
        summary: msg
    });

    }
  );
}

deletar(id) {
  this.oportunidadeService.deletar(id).subscribe(resp => {
      this.messageService.add({
        severity: 'success',
        summary: 'Oportunidade Excluída com Sucesso'
    });

    this.consultar();
  });

}

}





