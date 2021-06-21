/* eslint-disable no-undef */
import { getLevel } from '../index';
import fetchData from '../http';

jest.mock('../http');

test('should call', () => {
  fetchData.mockReturnValue('{}');
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('no level', () => {
  fetchData.mockReturnValue('{}');
  const result = getLevel();

  expect(result).toBe('Информация об уровне временно недоступна');
});

test('level ok', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: '3',
  });
  const result = getLevel(3);

  expect(result).toBe('Ваш текущий уровень: 3');
});
