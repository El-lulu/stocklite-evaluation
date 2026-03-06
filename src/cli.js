import { Stock } from './stock.js';
import { formaterTableau } from './format.js';
import { chargerExemple } from './utils.js';

const stock = chargerExemple(new Stock());
const commande = process.argv[2] ?? 'lister';

switch (commande) {
  case 'lister':
    console.log(formaterTableau(stock.lister()));
    break;
  default:
    console.error(`Commande inconnue : ${commande}`);
    process.exitCode = 1;
}
