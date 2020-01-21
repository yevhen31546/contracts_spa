import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsComponent } from './contracts.component';
import { MatToolbarModule, MatButtonModule, MatTableModule, MatProgressSpinnerModule } from '@angular/material';
import { By } from '@angular/platform-browser';

describe('ContractsComponent', () => {
  let component: ContractsComponent;
  let fixture: ComponentFixture<ContractsComponent>;
  let element: HTMLElement;

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
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Call ngOnInit function
  it('Contract ngOnInit', () => {
    // const fixture = TestBed.createComponent(ContractsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    component.ngOnInit();
    expect(component.dataSource).not.toBe([]);
    // expect(component.dataSource).();

  });

  // Testing project loads contracts mock data
  it('Contract List', () => {
    // const fixture = TestBed.createComponent(ContractsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    expect(component.dataSource).not.toBe([]);
    // expect(component.dataSource).();

  });

  // Testing loading indicator is loaded before contracts
  it('Loading Test', () => {
    const query = fixture.debugElement.query(By.css('.loading-spinner')).nativeElement;
    // expect(fixture.debugElement.nativeElement).toContain(query);
    expect(query).toBeTruthy();
  });




});
