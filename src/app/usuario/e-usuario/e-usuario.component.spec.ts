import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EUsuarioComponent } from './e-usuario.component';

describe('EUsuarioComponent', () => {
  let component: EUsuarioComponent;
  let fixture: ComponentFixture<EUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
