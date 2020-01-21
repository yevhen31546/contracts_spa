import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //  Return a mock data with 3 seconds delay
  public get() {

    // Here is mock contact data
    const contracts = [];
    contracts.push({ name: 'Spaceman Spiff', address: 'Outer Space', price: 12, agent: 'Scal Octo', company: 'Djwo', start: '2019-12-12', end: '2019-12-12' });
    contracts.push({ name: 'Stupendous Man', address: 'The City', price: 30.5, agent: 'Scal Octo', company: 'Djwo', start: '2019-12-12', end: '2019-12-12' });
    contracts.push({ name: 'Tracer Bullet', address: 'The City', price: 24, agent: 'Scal Octo', company: 'Djwo', start: '2019-12-12', end: '2019-12-12' });
    contracts.push({ name: 'Napalm Man', address: 'War Zone', price: 43.333, agent: 'Scal Octo', company: 'Djwo', start: '2019-12-12', end: '2019-12-12' });
    contracts.push({ name: 'Adult Calvin', address: 'In the future', price: 54, agent: 'Scal Octo', company: 'Djwo', start: '2019-12-12', end: '2019-12-12' });

    return new Promise(resolve =>
      setTimeout(() => resolve(contracts), 3000) // 3s delay
    );
  }
}