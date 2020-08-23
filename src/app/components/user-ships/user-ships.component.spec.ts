import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShipsComponent } from './user-ships.component';

describe('UserShipsComponent', () => {
  let component: UserShipsComponent;
  let fixture: ComponentFixture<UserShipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
