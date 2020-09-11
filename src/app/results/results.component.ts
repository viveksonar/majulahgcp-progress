import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { QwiklabsProfileLinkService } from '@app/services/qwiklabs-profile-link.service';
import QwiklabsHelper from '@app/helpers/qwiklabs-helper';

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
  }

  private async _onLinkChanged(link): Promise<void> {
    this.profileLink = link;
    if (QwiklabsHelper.isProfileLinkCorrect(link)) {
      const profile = await QwiklabsHelper.getProfileFrom(link);
      console.log(profile);
    } else {
      // show error message;
    }

    // this._cdsRef.markForCheck();
  }

  ngOnInit(): void {
    this._linkService.profileLink$.subscribe(this._onLinkChanged.bind(this));
  }

}
