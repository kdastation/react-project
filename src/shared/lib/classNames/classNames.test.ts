import { classNames } from './classNames';

describe('classNames', () => {
  test('only base class', () => {
    expect(classNames('class')).toBe('class');
  });

  test('only with mods', () => {
    expect(classNames(null, {
      hover: true,
    })).toBe('hover');
  });

  test('only with extras', () => {
    expect(classNames(
      null,
      {},
      ['class'],
    )).toBe('class');
  });

  test('base class and mods', () => {
    const expected = 'base-class hover';
    expect(classNames(
      'base-class',
      {
        hover: true,
      },
    )).toBe(expected);
  });

  test('all classes together', () => {
    const expected = 'base-class additional-class mod-class';
    expect(classNames(
      'base-class',
      {
        'mod-class': true,
      },
      [
        'additional-class',
      ],
    )).toBe(expected);
  });
  test('different mods', () => {
    expect(classNames(
      null,
      {
        hover: true,
        click: false,
      },
    )).toBe('hover');
  });
});
