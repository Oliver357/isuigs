import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEliminarClienteComponent } from './detalle-eliminar-cliente.component';

describe('DetalleEliminarClienteComponent', () => {
  let component: DetalleEliminarClienteComponent;
  let fixture: ComponentFixture<DetalleEliminarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEliminarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEliminarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
