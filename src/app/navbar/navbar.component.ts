import { Component, OnInit } from '@angular/core';
import { QwiklabsProfileLinkService } from '@app/services/qwiklabs-profile-link.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public profileSearchText: string = 'testing';
  private _linkService: QwiklabsProfileLinkService;

  constructor(linkService: QwiklabsProfileLinkService) { 
    this._linkService = linkService;
  }

  ngOnInit(): void {
  }

  submitLink(): void {
    this._linkService.setProfileLink(this.profileSearchText);
  }
}
