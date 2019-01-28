import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeditarComponent } from './formeditar.component';

describe('FormeditarComponent', () => {
  let component: FormeditarComponent;
  let fixture: ComponentFixture<FormeditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormeditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
