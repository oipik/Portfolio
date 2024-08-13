import movieStore from '../images/projects/movie-store.png';
import fakeStore from '../images/projects/fake-store.png';
import portfolio from '../images/projects/portfolio.png';
import coffeeShop from '../images/projects/coffee-shop.png';
import axit from '../images/projects/axit.png';
import wawe from '../images/projects/wawe.png';

import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import scss from "../images/skills/scss.svg";
import tailwind from "../images/skills/tailwind.svg";
import figma from "../images/skills/figma.svg";
import git from "../images/skills/git.svg";
import js from "../images/skills/js.svg";
import ts from "../images/skills/ts.svg";
import react from "../images/skills/react.svg";
import redux from "../images/skills/redux.svg";

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
    href: "https://movie-store-xi-eight.vercel.app/"
  },
  {
    src: fakeStore,
    name: 'Fake-store',
    stack: ['Tailwind CSS', 'TS', 'React', 'RTK Query'],
    descr:
      'Приложение представляет из себя простое web приложение с каталогом товаров. По api выполняется запрос на получение товаров, отзывов и их отображение. Можно просматривать карточку товара, оставлять отзыв, смотреть отзывы, фильтровать товары, добавлять товары в корзину и производить общий подсчет суммы денег. Так же имеется пагинация. Реализована мобильная версия.',
    href: "https://fake-store-neon-one.vercel.app/"
  },
  {
    src: portfolio,
    name: 'Portfolio',
    stack: ['SCSS', 'JS', 'React', 'Redux Toolkit'],
    descr:
      'Приложение представляет собой пример Портфолио сверстанного с макета figma.',
    href: "https://portfolio-from-figma.vercel.app/"
  },
  {
    src: coffeeShop,
    name: 'Coffee-shop',
    stack: ['SCSS', 'JS', 'React'],
    descr: 'Небольшое многостраничное приложение о кофе.',
    href: "https://coffee-shop-sand-theta.vercel.app/"
  },
  {
    src: axit,
    name: 'Axit',
    stack: ['HTML', 'SCSS', 'Gulp', 'JQuery'],
    descr: 'Представляет собой Landing Page страницу.',
    href: "https://axit-rose.vercel.app/"
  },
  {
    src: wawe,
    name: 'Wawe',
    stack: ['HTML', 'SCSS', 'JQuery'],
    descr: 'Представляет собой Landing Page страницу.',
    href: "https://wawe-virid.vercel.app/"
  },
];

export const navItems = [
  { item: "Обо мне", href: "#about" },
  { item: "Навыки", href: "#skills" },
  { item: "Образование и опыт", href: "#background" },
  { item: "Портфолио", href: "#portfolio" },
];

export const skills = [
  { src: html, name: "HTML 5" },
  { src: css, name: "CSS 3" },
  { src: scss, name: "SCSS" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: figma, name: "Figma" },
  { src: git, name: "Git" },
  { src: js, name: "JavaScript" },
  { src: ts, name: "TypeScript" },
  { src: react, name: "React" },
  { src: redux, name: "Redux" },
];