import { Component, OnInit, Input } from '@angular/core';
import { Activity } from './activity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  @Input() activities: Observable<Activity[]>;

  constructor() { }

  ngOnInit() {
  }

}
