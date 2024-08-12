import movieStore from '../images/projects/movie-store.png';
import fakeStore from '../images/projects/fake-store.png';
import portfolio from '../images/projects/portfolio.png';
import coffeeShop from '../images/projects/coffee-shop.png';
import axit from '../images/projects/axit.png';
import wawe from '../images/projects/wawe.png';

export const projects = [
  {
    src: movieStore,
    name: 'Movie-store',
    stack: [
      'Tailwind CSS',
      'TS',
      'React',
      'RTK Query',
      'Node.js/Express.js',
      'MongoDB',
    ],
    descr:
      'Сервис для поиска и просмотра фильмов, сериалов и мультфильмов с удобной категоризацией и возможностью сохранять в избранное. Пользователи могут менять цветовую тему, просматривать карточки фильмов, а также пользоваться пагинацией. Поддерживается мобильная версия, регистрация и авторизация.',
  },
  {
    src: fakeStore,
    name: 'Fake-store',
    stack: ['Tailwind CSS', 'TS', 'React', 'RTK Query'],
    descr:
      'Приложение представляет из себя простое web приложение с каталогом товаров. По api выполняется запрос на получение товаров, отзывов и их отображение. Можно просматривать карточку товара, оставлять отзыв, смотреть отзывы, фильтровать товары, добавлять товары в корзину и производить общий подсчет суммы денег. Так же имеется пагинация. Реализована мобильная версия.',
  },
  {
    src: portfolio,
    name: 'Portfolio',
    stack: ['SCSS', 'JS', 'React', 'Redux Toolkit'],
    descr:
      'Приложение представляет собой пример Портфолио сверстанного с макета figma.',
  },
  {
    src: coffeeShop,
    name: 'Coffee-shop',
    stack: ['SCSS', 'JS', 'React'],
    descr: 'Небольшое многостраничное приложение о кофе.',
  },
  {
    src: axit,
    name: 'Axit',
    stack: ['HTML', 'SCSS', 'Gulp', 'JQuery'],
    descr: 'Представляет собой Landing Page страницу.',
  },
  {
    src: wawe,
    name: 'Wawe',
    stack: ['HTML', 'SCSS', 'JQuery'],
    descr: 'Представляет собой Landing Page страницу.',
  },
];