import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjoutGarageComponent } from './page-ajout-garage.component';

describe('PageAjoutGarageComponent', () => {
  let component: PageAjoutGarageComponent;
  let fixture: ComponentFixture<PageAjoutGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAjoutGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjoutGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
