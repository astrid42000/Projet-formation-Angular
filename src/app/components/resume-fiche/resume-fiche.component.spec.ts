import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFicheComponent } from './resume-fiche.component';

describe('ResumeFicheComponent', () => {
  let component: ResumeFicheComponent;
  let fixture: ComponentFixture<ResumeFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
