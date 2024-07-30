import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalObrasComponent } from './modal-obras.component';

describe('ModalObrasComponent', () => {
  let component: ModalObrasComponent;
  let fixture: ComponentFixture<ModalObrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalObrasComponent]
    });
    fixture = TestBed.createComponent(ModalObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
