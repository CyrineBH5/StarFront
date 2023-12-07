import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AjouterCoursComponent } from './ajouter-cours.component';
import { CoursService } from 'src/app/services/cours/cours.service';
import { LeconService } from 'src/app/services/lecon/lecon.service';
import { of } from 'rxjs';

describe('AjouterCoursComponent', () => {
  let component: AjouterCoursComponent;
  let fixture: ComponentFixture<AjouterCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterCoursComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [CoursService, LeconService], // Provide your services here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ajouterCours method', async () => {
    const coursService = TestBed.inject(CoursService);
    const leconService = TestBed.inject(LeconService);

    spyOn(coursService, 'ajouterCours').and.returnValue(Promise.resolve(1)); // Return a Promise

    spyOn(leconService, 'ajouterLecon');

    const formMock = { value: { // Fix the formMock structure
      titre: 'Test Titre',
      description: 'Test Description',
      duree: 'Test Duree',
      langue: 'Test Langue',
    } } as NgForm;

    await component.ajouterCours(formMock);

    expect(coursService.ajouterCours).toHaveBeenCalledOnceWith(
      jasmine.objectContaining({
        titre: 'Test Titre',
        description: 'Test Description',
        duree: 'Test Duree',
        langue: 'Test Langue',
      }),
      undefined // Assuming you want to mock the selectedImageFile for this test
    );

    expect(leconService.ajouterLecon).toHaveBeenCalledOnceWith(
      jasmine.objectContaining({
        titre: 'Test Titre',
        description: 'Test Description',
        contenu: undefined, // Assuming you want to mock the selectedFile for this test
      }),
      undefined
    );
  });

  // Add more test cases as needed
});
