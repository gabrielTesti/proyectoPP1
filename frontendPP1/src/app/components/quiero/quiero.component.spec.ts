import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroComponent } from './quiero.component';

describe('QuieroComponent', () => {
  let component: QuieroComponent;
  let fixture: ComponentFixture<QuieroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuieroComponent]
    });
    fixture = TestBed.createComponent(QuieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
