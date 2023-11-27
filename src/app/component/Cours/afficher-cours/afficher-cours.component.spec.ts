import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCoursComponent } from './afficher-cours.component';

describe('AfficherCoursComponent', () => {
  let component: AfficherCoursComponent;
  let fixture: ComponentFixture<AfficherCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
