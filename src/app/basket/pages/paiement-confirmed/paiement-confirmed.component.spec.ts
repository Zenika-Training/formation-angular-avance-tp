import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementConfirmedComponent } from './paiement-confirmed.component';

describe('PaiementConfirmedComponent', () => {
  let component: PaiementConfirmedComponent;
  let fixture: ComponentFixture<PaiementConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
