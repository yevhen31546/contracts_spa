import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  // Testing service is created successfully
  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  // Getting data from api service
  it('should get data from api', () => {
    const service = TestBed.get(ApiService);
    expect(service).toBeTruthy();
    // const component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  // Testing 3s delay
  // it('should be delayed 3 seconds', fakeAsync(() => {
  //   // const fixture = TestBed.get(ApiService);
  //   // let result = fixture.get();
  //   // console.log(result);


  //   // let actuallyDone = false;
  //   // let currentTime = 0;

  //   // let source = Observable.of(true).delay(1000);
  //   // // Observable.of(true).delay(1000);

  //   // source.subscribe(() => {
  //   //   actuallyDone = true;
  //   // });

  //   // currentTime = 10;
  //   // tick(3000);

  //   // expect(actuallyDone).toEqual(true);

  //   // expect(compiled.querySelector('.content span').textContent).toContain('contracts-spa app is running!');
  //   // expect(result).toBeTruthy();
  // });

});
