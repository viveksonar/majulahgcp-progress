import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QwiklabsProfileLinkService {
  private _profileLinkSource = new Subject<string>();

  profileLink$ = this._profileLinkSource.asObservable();

  setProfileLink(link: string) {
    this._profileLinkSource.next(link);
  }
}
