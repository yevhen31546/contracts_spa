import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsComponent } from './contracts.component';
import { MatToolbarModule, MatButtonModule, MatTableModule, MatProgressSpinnerModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { ApiService } from '../api.service';

describe('ContractsComponent', () => {
  let component: ContractsComponent;
  let fixture: ComponentFixture<ContractsComponent>;
  let element: HTMLElement;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatProgressSpinnerModule
      ],
      declarations: [ContractsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsComponent);
    service = TestBed.get(ApiService);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Loading mock data test
  it('Contract List', () => {
    service.get().subscribe(posts => {
      expect(posts.length).toBe(5);
      // expect(posts).toEqual(dummyPosts);
    });
    expect(component.dataSource).not.toBe([]);
  });

  // Loading spinner test
  it('Loading Test', () => {
    if (fixture.debugElement.query(By.css('.loading-spinner')) !== null) {
      const query = fixture.debugElement.query(By.css('.loading-spinner')).nativeElement;
      expect(query).toBeTruthy();
    }
  });

});
