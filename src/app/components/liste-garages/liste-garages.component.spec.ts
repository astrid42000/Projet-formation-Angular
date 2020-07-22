import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGaragesComponent } from './liste-garages.component';

describe('ListeGaragesComponent', () => {
  let component: ListeGaragesComponent;
  let fixture: ComponentFixture<ListeGaragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeGaragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
