export class Stock {
  #produits = new Map();

  ajouter(ref, nom, quantite, seuil = 0) {
    if (!ref || !nom) throw new Error('Référence et nom obligatoires');
    if (!Number.isInteger(quantite) || quantite < 0) throw new Error('Quantité invalide');
    this.#produits.set(ref, { ref, nom, quantite, seuil });
    return this.#produits.get(ref);
  }

  retirer(ref, quantite) {
    const p = this.#produits.get(ref);
    if (!p) throw new Error(`Produit inconnu : ${ref}`);
    if (quantite > p.quantite) throw new Error('Stock insuffisant');
    p.quantite -= quantite;
    return p;
  }

  obtenir(ref) {
    return this.#produits.get(ref) ?? null;
  }

  lister() {
    return [...this.#produits.values()].sort((a, b) => a.ref.localeCompare(b.ref));
  }
}
