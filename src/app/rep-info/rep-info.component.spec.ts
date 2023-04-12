import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepInfoComponent } from './rep-info.component';

describe('RepInfoComponent', () => {
  let component: RepInfoComponent;
  let fixture: ComponentFixture<RepInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
