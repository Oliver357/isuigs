import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoUsuarioComponent } from './evento-usuario.component';

describe('EventoUsuarioComponent', () => {
  let component: EventoUsuarioComponent;
  let fixture: ComponentFixture<EventoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
