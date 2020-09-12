import { Component, OnInit } from '@angular/core';
import { FullLoaderService } from '@app/services/full-loader.service';

@Component({
  selector: 'app-full-loader',
  templateUrl: './full-loader.component.html',
  styleUrls: ['./full-loader.component.scss']
})
export class FullLoaderComponent implements OnInit {
  public loadingStatus: boolean = false;
  private _loaderService: FullLoaderService;
 
  constructor(
    loaderService: FullLoaderService,
  ) {
    this._loaderService = loaderService;
  }

  ngOnInit(): void {
    this._loaderService.loadingStatus$.subscribe((loadingStatus: boolean) => {
      this.loadingStatus = loadingStatus;
    });
  }
}
