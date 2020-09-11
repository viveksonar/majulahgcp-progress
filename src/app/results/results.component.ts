import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { QwiklabsProfileLinkService } from '@app/services/qwiklabs-profile-link.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {
  public profileLink: string = 'cats';
  private _linkService: QwiklabsProfileLinkService;
  private _cdsRef: ChangeDetectorRef;

  constructor(
    linkService: QwiklabsProfileLinkService,
    cdsRef: ChangeDetectorRef, 
    ) { 
    this._linkService = linkService;
    this._cdsRef = cdsRef;
    console.log(this._cdsRef);
  }

  private _onLinkChanged(link): void {
    this.profileLink = link;
    this._cdsRef.markForCheck();
  }

  ngOnInit(): void {
    this._linkService.profileLink$.subscribe(this._onLinkChanged.bind(this));
  }

}
