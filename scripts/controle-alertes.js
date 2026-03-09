// Contrôle de non-régression des alertes (utilisable avec git bisect run)
// Code de sortie 0 : comportement correct — 1 : bug présent
import { Stock } from '../src/stock.js';

const s = new Stock();
s.ajouter('X1', 'Pile', 5, 5); // quantité ÉGALE au seuil : doit être en alerte
const enAlerte = s.alertes().some((p) => p.ref === 'X1');
console.log(enAlerte ? 'OK : X1 est en alerte' : 'BUG : X1 (quantité = seuil) absent des alertes');
process.exit(enAlerte ? 0 : 1);
