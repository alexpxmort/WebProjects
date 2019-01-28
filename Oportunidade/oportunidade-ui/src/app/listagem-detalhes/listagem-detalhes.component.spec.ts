import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDetalhesComponent } from './listagem-detalhes.component';

describe('ListagemDetalhesComponent', () => {
  let component: ListagemDetalhesComponent;
  let fixture: ComponentFixture<ListagemDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
