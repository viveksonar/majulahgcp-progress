import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { QwiklabsProfileLinkService } from '@app/services/qwiklabs-profile-link.service';
import QwiklabsHelper from '@app/helpers/qwiklabs-helper';
import { QwiklabsQuestBadge, QwiklabsTier, QwiklabsProfileUser } from  '@app/types/qwiklabs';
import QuestTiers from '@app/static/tiers.json';
import { FullLoaderService } from '@app/services/full-loader.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {
  public profileLoaded: boolean = false;
  public profile: QwiklabsProfileUser;
  public uncompletedQuestBadges: QwiklabsQuestBadge[] = [];
  public completedQuestBadges: QwiklabsQuestBadge[] = [];
  public relevantQuestTiers: QwiklabsTier[] = QuestTiers;
  private _loaderService: FullLoaderService;
  private _linkService: QwiklabsProfileLinkService;
  private _cdsRef: ChangeDetectorRef;

  constructor(
    linkService: QwiklabsProfileLinkService,
    loaderService: FullLoaderService,
    cdsRef: ChangeDetectorRef, 
    ) { 
    this._linkService = linkService;
    this._loaderService = loaderService;
    this._cdsRef = cdsRef;
  }

  private async _onLinkChanged(link): Promise<void> {
    if (QwiklabsHelper.isProfileLinkCorrect(link)) {
      this._loaderService.setLoading();
      const fetchStatus = await QwiklabsHelper.getProfileFrom(link);
      this.profile = fetchStatus.user;
      this.uncompletedQuestBadges = QwiklabsHelper.getUncompletedBadges(fetchStatus.badges);
      this.completedQuestBadges = QwiklabsHelper.getCompletedBadges(fetchStatus.badges);
      this.profileLoaded = true;
      this._loaderService.setLoaded();
    } else {
      // show error message;
      this.profileLoaded = false;
    }

    this._cdsRef.markForCheck();
  }

  ngOnInit(): void {
    this._linkService.profileLink$.subscribe(this._onLinkChanged.bind(this));
  }

}
