import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoProyectoComponent } from './evento-proyecto.component';

describe('EventoProyectoComponent', () => {
  let component: EventoProyectoComponent;
  let fixture: ComponentFixture<EventoProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
