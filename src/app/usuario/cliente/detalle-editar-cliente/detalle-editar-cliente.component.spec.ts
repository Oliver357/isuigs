import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEditarClienteComponent } from './detalle-editar-cliente.component';

describe('DetalleEditarClienteComponent', () => {
  let component: DetalleEditarClienteComponent;
  let fixture: ComponentFixture<DetalleEditarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEditarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
