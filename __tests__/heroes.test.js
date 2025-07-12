import { sortHeroesByHealth } from '../src/heroes';

describe('sortHeroesByHealth', () => {
  it('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  it('should not modify the original array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const sorted = sortHeroesByHealth(heroes);
    expect(heroes).not.toBe(sorted); // Проверка, что это новый массив
  });
});
