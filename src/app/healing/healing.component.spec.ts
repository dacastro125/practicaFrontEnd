import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingComponent } from './healing.component';

describe('HealingComponent', () => {
  let component: HealingComponent;
  let fixture: ComponentFixture<HealingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
