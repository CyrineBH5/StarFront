import { Lecon } from './lecon';

describe('Lecon', () => {
  it('should create an instance', () => {
    expect(new Lecon('Test Titre', 'Test Description', 'Test Contenu', 1)).toBeTruthy();
  });
});
