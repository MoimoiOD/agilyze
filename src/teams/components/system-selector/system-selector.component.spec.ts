import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSelectorComponent } from './system-selector.component';

describe('SystemSelectorComponent', () => {
  let component: SystemSelectorComponent;
  let fixture: ComponentFixture<SystemSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
