import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitlistComponent } from './fitlist.component';

describe('FitlistComponent', () => {
  let component: FitlistComponent;
  let fixture: ComponentFixture<FitlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
