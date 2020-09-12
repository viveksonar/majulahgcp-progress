import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullLoaderService {
  private _loadingStatusSource = new Subject<boolean>();

  loadingStatus$ = this._loadingStatusSource.asObservable();

  setLoading() {
    this._loadingStatusSource.next(true);
  }

  setLoaded() {
    this._loadingStatusSource.next(false);
  }
}
