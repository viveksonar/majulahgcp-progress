import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FullLoaderService } from '@app/services/full-loader.service';

@Component({
  selector: 'app-full-loader',
  templateUrl: './full-loader.component.html',
  styleUrls: ['./full-loader.component.scss']
})
export class FullLoaderComponent implements OnInit {
  public loadingStatus: boolean = false;
  private _loaderService: FullLoaderService;
  private _cdsRef: ChangeDetectorRef;
 
  constructor(
    loaderService: FullLoaderService,
    cdsRef: ChangeDetectorRef
  ) {
    this._loaderService = loaderService;
    this._cdsRef = cdsRef;
  }

  ngOnInit(): void {
    this._loaderService.loadingStatus$.subscribe((loadingStatus: boolean) => {
      this.loadingStatus = loadingStatus;
    });
  }
}
