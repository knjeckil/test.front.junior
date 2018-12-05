import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { IDestination } from './destination.model';
import { map, take } from 'rxjs/operators';

@Injectable()
export class DestinationFirestore {
	constructor(protected db: AngularFirestore) {}
	getAll() {
		return this.db.collection<IDestination>('/destinations', ref => ref.orderBy('name')).valueChanges().pipe(take(1));
	}

	getById(id: string) {
		return this.db.collection<IDestination>('/destinations', ref => ref.where('id', '==', id).limit(1)).valueChanges().pipe(
			map(results => results[0]),
			take(1),
		);
	}
}
