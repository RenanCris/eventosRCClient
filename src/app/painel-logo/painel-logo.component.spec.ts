import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PainelLogoComponent } from './painel-logo.component';


describe('PainelLogoComponent', () => {
  let component: PainelLogoComponent;
  let fixture: ComponentFixture<PainelLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
