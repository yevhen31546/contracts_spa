import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  // Testing service is created successfully
  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
  
  // Getting data from api service
  // it('should get data from api', () => {
  //   const fixture = TestBed.createComponent(ApiService);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   let result = component.get();
  //   console.log(result);
  //   // expect(compiled.querySelector('.content span').textContent).toContain('contracts-spa app is running!');
  //   // expect(result).toBeTruthy();
  // });

  // Testing 3s delay
  // it('should be delayed 3 seconds', () => {
  //   const fixture = TestBed.createComponent(ApiService);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   let result = component.get();
  //   console.log(result);
  //   // expect(compiled.querySelector('.content span').textContent).toContain('contracts-spa app is running!');
  //   // expect(result).toBeTruthy();
  // });

});
