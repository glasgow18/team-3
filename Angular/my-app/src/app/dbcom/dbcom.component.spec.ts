import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcomComponent } from './dbcom.component';

describe('DbcomComponent', () => {
  let component: DbcomComponent;
  let fixture: ComponentFixture<DbcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
