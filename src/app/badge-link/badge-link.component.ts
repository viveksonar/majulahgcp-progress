import { Component, OnInit, Input } from '@angular/core';
import { QwiklabsQuestBadge } from  '@app/types/qwiklabs';

@Component({
  selector: 'app-badge-link',
  templateUrl: './badge-link.component.html',
  styleUrls: ['./badge-link.component.scss']
})
export class BadgeLinkComponent implements OnInit {
  @Input() badge: QwiklabsQuestBadge;

  constructor() {}

  ngOnInit(): void {
  }

}
