import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCityComponent } from './default-city.component';

describe('DefaultCityComponent', () => {
  let component: DefaultCityComponent;
  let fixture: ComponentFixture<DefaultCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
