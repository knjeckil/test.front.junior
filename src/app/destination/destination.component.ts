import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDestination } from './destination.model';
import { Activity } from '../activities/activity';
import { ActivitiesService } from '../activities/activities.service';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
	destination: IDestination;
	activities: Activity[];
	get bgImg() { return `url('${this.destination.bg}')`; }
	constructor(
		protected route: ActivatedRoute, 
		private activitiesService: ActivitiesService
	) {}
	ngOnInit() {
		this.route.data
		.subscribe((data: { destination: IDestination }) => {
			this.destination = data.destination;		
		});
		
		this.activitiesService.getActivitiesByDestionationId(this.destination.id)
		.subscribe(activities => this.activities = activities);
	}
}
