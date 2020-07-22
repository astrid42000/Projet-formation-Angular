import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFicheVoitureComponent } from './page-fiche-voiture.component';

describe('PageFicheVoitureComponent', () => {
  let component: PageFicheVoitureComponent;
  let fixture: ComponentFixture<PageFicheVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFicheVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFicheVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
