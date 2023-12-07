import { Cours } from './cours';

describe('Cours', () => {
  it('should create an instance', () => {
    expect(new Cours('Test Titre', 'Test Description', 1, 'Test Langue', 'TestCreatedBy')).toBeTruthy();
  });
});
