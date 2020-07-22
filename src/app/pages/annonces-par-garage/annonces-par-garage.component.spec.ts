import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesParGarageComponent } from './annonces-par-garage.component';

describe('AnnoncesParGarageComponent', () => {
  let component: AnnoncesParGarageComponent;
  let fixture: ComponentFixture<AnnoncesParGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesParGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesParGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
