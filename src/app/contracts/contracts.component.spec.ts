import { async, ComponentFixture, TestBed, flushMicrotasks, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';

import { ContractsComponent } from './contracts.component';
import { MatToolbarModule, MatButtonModule, MatTableModule, MatProgressSpinnerModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { ApiService } from '../api.service';

describe('ContractsComponent', () => {
  let component: ContractsComponent;
  let fixture: ComponentFixture<ContractsComponent>;
  let element: HTMLElement;
  let service: ApiService;
  let dataList: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatProgressSpinnerModule
      ],
      declarations: [ContractsComponent],
      providers: [ApiService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsComponent);
    service = TestBed.get(ApiService);
    component = fixture.componentInstance;
    component.displayedColumns = component.columnNames.map(x => x.id);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Loading mock data test
  it('Contract List', fakeAsync(() => {
    dataList = service.get();
    component.dataSource = dataList;

    // here you could add an expect to validate component state before the call or service completes

    tick(3000); // simulate the promise being resolved

    expect(component.dataSource.length).toBe(5);
    expect(component.dataSource).not.toBe([]);
    expect(service.get).toHaveBeenCalled;
    fixture.detectChanges();


  }));

  // Loading spinner test
  it('Loading Test', () => {
    if (fixture.debugElement.query(By.css('.loading-spinner')) !== null) {
      const query = fixture.debugElement.query(By.css('.loading-spinner')).nativeElement;
      expect(query).toBeTruthy();
    }
  });

});
