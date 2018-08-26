import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePrimarioComponent } from './componente-primario.component';

describe('ComponentePrimarioComponent', () => {
  let component: ComponentePrimarioComponent;
  let fixture: ComponentFixture<ComponentePrimarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePrimarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
