import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireGarageComponent } from './formulaire-garage.component';

describe('FormulaireGarageComponent', () => {
  let component: FormulaireGarageComponent;
  let fixture: ComponentFixture<FormulaireGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
