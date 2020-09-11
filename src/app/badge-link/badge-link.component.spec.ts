import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeLinkComponent } from './badge-link.component';

describe('BadgeLinkComponent', () => {
  let component: BadgeLinkComponent;
  let fixture: ComponentFixture<BadgeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
