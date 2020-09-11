import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionTierComponent } from './progression-tier.component';

describe('ProgressionTierComponent', () => {
  let component: ProgressionTierComponent;
  let fixture: ComponentFixture<ProgressionTierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressionTierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressionTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
