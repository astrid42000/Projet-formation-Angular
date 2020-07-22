import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceRapideComponent } from './annonce-rapide.component';

describe('AnnonceRapideComponent', () => {
  let component: AnnonceRapideComponent;
  let fixture: ComponentFixture<AnnonceRapideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceRapideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceRapideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
