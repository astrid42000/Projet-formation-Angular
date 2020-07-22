import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAproposComponent } from './page-apropos.component';

describe('PageAproposComponent', () => {
  let component: PageAproposComponent;
  let fixture: ComponentFixture<PageAproposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAproposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
