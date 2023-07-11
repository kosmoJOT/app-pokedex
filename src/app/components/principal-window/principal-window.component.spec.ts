import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalWindowComponent } from './principal-window.component';

describe('PrincipalWindowComponent', () => {
  let component: PrincipalWindowComponent;
  let fixture: ComponentFixture<PrincipalWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalWindowComponent]
    });
    fixture = TestBed.createComponent(PrincipalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
