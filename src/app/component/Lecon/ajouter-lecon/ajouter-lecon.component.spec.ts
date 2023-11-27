import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLeconComponent } from './ajouter-lecon.component';

describe('AjouterLeconComponent', () => {
  let component: AjouterLeconComponent;
  let fixture: ComponentFixture<AjouterLeconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterLeconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterLeconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
