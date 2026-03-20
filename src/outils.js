// Jeu de données d'exemple
export function chargerExemple(stock) {
  stock.ajouter('A100', 'Vis 4x30', 250, 100);
  stock.ajouter('B200', 'Chevilles 6 mm', 40, 50);
  stock.ajouter('C300', 'Colle bois', 0, 5);
  stock.ajouter('D400', 'Équerre', 12, 12);
  return stock;
}
