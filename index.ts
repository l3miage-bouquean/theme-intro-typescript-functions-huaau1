// Import stylesheets
import './style.css';

// add prend en paramètre deux number
// add renvoie un number
function add(x: number, y: number): number {
  return x + y;
}

// concat peut prendre un nombre arbitraire d'arguments de type string
// concat renvoie une string
function concat(...L: string[]): string {
  let s = '';
  for (const v of L) {
    s += v;
  }
  return s;
}

console.log('add(3, 4) === ', add(3, 4));
console.log(
  'somme(1, 2, 3, 4, 5, 6) === ',
  concat('coucou', 'je', 'concatène')
);

/* -------------------------
 * Les fonctions ont un type
 */
type T_NN_N = (a: number, b: number) => number;
const f1: T_NN_N = add;
f1 === add;
f1(2, 3) === add(2, 3);

const f2: T_NN_N = (x: number, y: number) => x - y;
const f3: T_NN_N = (a, b) => a * b;

/* -------------------------
 * Exercice
 * Définissez le type fonction T_S_S
 * Ces fonctions prennent en paramètre une string
 * et renvoient comme valeur de retour une string.
 * Utilisez ce type pour définir une fonction qui prend une string S en paramètre et renvoir S préfixé par " // ".
 * Testez votre fonction.
 */
type T_S_S = (str: string) => string;
const concatDoubleSlash: T_S_S = (str) => concat('//', str);
console.log(concatDoubleSlash('Hello World'));
