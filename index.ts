import { forkJoin } from 'rxjs';
// Mike is from New Delhi and likes to eat pasta.

import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const randomFisrtName$ = ajax<any>(
  'https://random-data-api.com/api/name/random_name'
).pipe(map((ajaxResponse) => 'Mr/Ms ' + ajaxResponse.response.first_name));

const randomCapital$ = ajax<any>(
  'https://random-data-api.com/api/nation/random_nation'
).pipe(map((ajaxResponse) => ajaxResponse.response.capital));

const randomDish$ = ajax<any>(
  'https://random-data-api.com/api/food/random_food'
).pipe(map((ajaxResponse) => ajaxResponse.response.dish));

// randomName$.subscribe((value) => console.log(value));
// randomCapital$.subscribe((value) => console.log(value));
// randomdish$.subscribe((value) => console.log(value));

forkJoin([randomFisrtName$, randomCapital$, randomDish$]).subscribe(
  ([fisrtName, Capital, dish]) =>
    console.log(`${fisrtName} is from ${Capital} and likes to eat ${dish}.`)
);
