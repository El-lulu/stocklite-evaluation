// Import depuis l'ancien format texte « REF|NOM|QTE|SEUIL|CATEGORIE »
export function importerLegacy(stock, texte) {
  for (const ligne of texte.split('\n').filter(Boolean)) {
    const [ref, nom, qte, seuil, categorie] = ligne.split('|');
    stock.ajouter(ref, nom, Number(qte), Number(seuil), categorie);
  }
  return stock;
}
