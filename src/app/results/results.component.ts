import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private _route: ActivatedRoute;
  private _profileLink: string;

  constructor(
    linkService: QwiklabsProfileLinkService,
    loaderService: FullLoaderService,
    cdsRef: ChangeDetectorRef,
    route: ActivatedRoute,
    ) { 
    this._linkService = linkService;
    this._loaderService = loaderService;
    this._cdsRef = cdsRef;
    this._route = route;
  }

  private async _onLinkChanged(link): Promise<void> {
    if (QwiklabsHelper.isProfileLinkCorrect(link)) {
      this._loaderService.setLoading();
      const fetchStatus = await QwiklabsHelper.getProfileFrom(link);
      this.profile = fetchStatus.user;
      this.uncompletedQuestBadges = QwiklabsHelper.getUncompletedBadges(fetchStatus.badges);
      this.completedQuestBadges = QwiklabsHelper.getCompletedBadges(fetchStatus.badges);
      this._profileLink = `${window.location.origin}${window.location.pathname}?link=${encodeURIComponent(link)}`;
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
    this._route.queryParams.subscribe(params => {
      const link = params['link'];
      if (link && link !== ''){
        this._onLinkChanged(link);
      }
    });
  }

  public copyProfileLinkToClipboard(): void {
    var dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    
    dummy.value = this._profileLink;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }
}
