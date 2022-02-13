import yesterday from './ts/yesterday';
import LOCALES from './ts/locales';

console.log('Beginning of execution');

const today = new Date();

console.log(`Today is ${today.toLocaleDateString(LOCALES.BRAZIL)}`);
console.log(
  `Yesterday was ${yesterday(today).toLocaleDateString(LOCALES.BRAZIL)}`
);

console.log('End of execution');
