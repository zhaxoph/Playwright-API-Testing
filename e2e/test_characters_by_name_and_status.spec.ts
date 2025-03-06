import { test, expect } from '@playwright/test';
import { GetAllCharacters } from '../support/pages/GetAllCharacters';
import { allCharactersUseCase } from '../support/utils/useCase.json';

test.describe('Get all characters', () => {

  let getAllCharacters: GetAllCharacters;

  test.beforeEach(async ({ page }) => {
    getAllCharacters = new GetAllCharacters(page);
  });
  const character = allCharactersUseCase.smithFamily
  test('Check for characters with name Rick Sanchez and status Alive', async () => {
    const getCharacters = await getAllCharacters.getCharacterNameAndStatus(character[0].name, character[0].status);
    expect(getCharacters).toBeTruthy();
    expect(getCharacters.name).toBe('Rick Sanchez');
    expect(getCharacters.status).toBe('Alive');
});
test('Check for characters with name Morty Smith and status Alive', async () => {
  const getCharacters = await getAllCharacters.getCharacterNameAndStatus(character[1].name, character[1].status);
  expect(getCharacters).toBeTruthy();
  expect(getCharacters.name).toBe('Morty Smith');
  expect(getCharacters.status).toBe('Alive');
});
test('Check for characters with name Beth Smith and status Alive', async () => {
  const getCharacters = await getAllCharacters.getCharacterNameAndStatus(character[2].name, character[2].status);
  expect(getCharacters).toBeTruthy();
  expect(getCharacters.name).toBe('Beth Smith');
  expect(getCharacters.status).toBe('Alive');
});
test('Check for characters with name Jerry Smith and status Alive', async () => {
  const getCharacters = await getAllCharacters.getCharacterNameAndStatus(character[3].name, character[3].status);
  expect(getCharacters).toBeTruthy();
  expect(getCharacters.name).toBe('Jerry Smith');
  expect(getCharacters.status).toBe('Alive');
});
test('Check for characters with name Summer Smith and status Alive', async () => {
  const getCharacters = await getAllCharacters.getCharacterNameAndStatus(character[4].name, character[4].status);
  expect(getCharacters).toBeTruthy();
  expect(getCharacters.name).toBe('Summer Smith');
  expect(getCharacters.status).toBe('Alive');
});
});