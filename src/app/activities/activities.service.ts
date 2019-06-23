import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from './activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) {}

  getActivitiesByDestionationId(destinationId: string): Observable<Activity[]> {
    const params = {} as any;
    params['destinationId'] = destinationId;
    return this.http.get<Activity[]>(`/api/activities/`, {params: params});
	}
}
