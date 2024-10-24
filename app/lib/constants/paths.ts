export enum PATHS {
  '/' = 'Главная',
  cart = 'Корзина',
  catalog = 'Каталог',
  sheet = 'Постельное белье',
  clothes = 'Одежда',
  aromas = 'Ароматы',
  accessories = 'Аксессуары',
  '' = '...',
}

export type PATHS_KEYS = keyof typeof PATHS;
