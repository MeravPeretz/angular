import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteringToCursesComponent } from './registering-to-curses.component';

describe('RegisteringToCursesComponent', () => {
  let component: RegisteringToCursesComponent;
  let fixture: ComponentFixture<RegisteringToCursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteringToCursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteringToCursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
