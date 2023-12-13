import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierLeconComponent } from './modifier-lecon.component';

describe('ModifierLeconComponent', () => {
  let component: ModifierLeconComponent;
  let fixture: ComponentFixture<ModifierLeconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierLeconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierLeconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
