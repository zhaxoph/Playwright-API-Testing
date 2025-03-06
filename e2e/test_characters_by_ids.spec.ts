import { test, expect } from '@playwright/test';
import { GetCharactersByID } from '../support/pages/GetCharactersByID';
import { allCharactersIDUseCase } from '../support/utils/useCase.json';

test.describe('Get all characters', () => {

  let getCharacterIds: GetCharactersByID;

  test.beforeEach(async ({ page }) => {
    getCharacterIds = new GetCharactersByID(page);
  });
  const character = allCharactersIDUseCase.smithFamily
  test('Check for characters with name Rick Sanchez and status Alive', async () => {
    const getCharacters = await getCharacterIds.getCharacterIds(character[0].id);
    expect(getCharacters).toBeTruthy();
    expect(getCharacters.name).toBe('Rick Sanchez');
    expect(getCharacters.status).toBe('Alive');
  });
});