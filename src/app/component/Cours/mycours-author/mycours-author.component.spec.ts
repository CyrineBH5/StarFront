import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoursAuthorComponent } from './mycours-author.component';

describe('MycoursAuthorComponent', () => {
  let component: MycoursAuthorComponent;
  let fixture: ComponentFixture<MycoursAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycoursAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycoursAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
