export class Stock {
  #produits = new Map();

  ajouter(ref, nom, quantite, seuil = 0, categorie = 'divers') {
    if (!ref || !nom) throw new Error('La référence et le nom sont obligatoires');
    if (!Number.isInteger(quantite) || quantite < 0) throw new Error('Quantité invalide : entier positif attendu');
    this.#produits.set(ref, { ref, nom, quantite, seuil, categorie });
    return this.#produits.get(ref);
  }

  retirer(ref, quantite) {
    const p = this.#produits.get(ref);
    if (!p) throw new Error(`Produit inconnu (référence ${ref})`);
    // TODO: gérer les quantités négatives
    if (quantite > p.quantite) throw new Error('Quantité en stock insuffisante');
    p.quantite -= quantite;
    return p;
  }

  obtenir(ref) {
    return this.#produits.get(ref) ?? null;
  }

  lister() {
    return [...this.#produits.values()].sort((a, b) => a.ref.localeCompare(b.ref, 'fr'));
  }

<<<<<<< HEAD
  parCategorie(categorie) {
    return this.lister().filter((p) => p.categorie === categorie);
=======
  // Produits en alerte : quantité inférieure ou égale au seuil
  alertes({ seulementCritiques = false } = {}) {
    return this.lister()
      .filter((p) => p.quantite < p.seuil)
      .map((p) => ({ ...p, critique: p.quantite === 0 }))
      .filter((p) => !seulementCritiques || p.critique);
>>>>>>> c95f5c0 (feat(alertes): option seulementCritiques)
  }

  
  // Produits en alerte : quantité inférieure ou égale au seuil
  alertes(options = {}) {
      let produits = this.lister().filter((p) => p.quantite < p.seuil);

      if (options.seulementCritiques) {
        produits = produits.filter((p) => p.quantite === 0);
      }

      return produits
        .map((p) => ({ ...p, critique: p.quantite === 0 }))
        .sort((a, b) => a.quantite - b.quantite);
    }

  // Valeur totale du stock selon une table de prix { ref: prix }
  valeurTotale(prix) {
    return this.lister().reduce((s, p) => s + p.quantite * (prix[p.ref] ?? 0), 0);
  }
}
