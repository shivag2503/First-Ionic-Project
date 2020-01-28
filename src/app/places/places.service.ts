import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
    providedIn: 'root'
})

export class PlacesService {
    private _places: Place[] = [
        new Place(
            'p1',
            'Udai Niwas Palace',
            'One of the greatest palace in Udaipur',
            'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/13/55/1355676_v2.jpeg',
            7500
        ),
        new Place(
            'p2',
            'Lake Palace',
            'One of the greatest palace in Udaipur',
            'https://media-cdn.tripadvisor.com/media/photo-s/01/b8/cb/cc/taj-lake-palace.jpg',
            17500
        ),
        new Place(
            'p3',
            'Jag Mandir',
            'One of the great palace in Udaipur',
            'https://www.makemytrip.com/travel-guide/media/dg_image/udaipur/Jag-Mandir-Palace.jpg',
            8500
        ),
    ];

    get places() {
        return [...this._places];
    }

    constructor() {}

    getPlace(id: string) {
        return {...this._places.find(p => p.id === id)};
    }
}
