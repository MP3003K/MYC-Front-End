import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoHijoCComponent } from './cuerpo-hijo-c.component';

describe('CuerpoHijoCComponent', () => {
  let component: CuerpoHijoCComponent;
  let fixture: ComponentFixture<CuerpoHijoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoHijoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoHijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
