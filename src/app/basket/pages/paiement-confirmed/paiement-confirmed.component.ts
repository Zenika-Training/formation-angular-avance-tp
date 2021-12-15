import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-paiement-confirmed',
  templateUrl: './paiement-confirmed.component.html',
  styleUrls: ['./paiement-confirmed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaiementConfirmedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
