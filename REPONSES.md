# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 
commande: git rev-list --count depart
resultat : 32

Q02: Sarah Benali
commande: git blame depart -- src/format.js

Q03: 4459c91
commande: git log --all --oneline -S"p.quantite < p.seuil" -- src/stock.js

Q04: API_KEY=sk_live_01de6ba0c9f4d846
commande: git log --all -S"API" --oneline -- / git show 9fa1b7d

Q05: 11544ab934db75adbe18115b8c463b52bdb4296a
commande: git show 11544ab

Q06: 17
commande: git rev-list --count v0.2.0..v1.0.0

Q07: essai-perf
commande: git tag -l --format='%(refname:short) %(objecttype)'

Q08: c'est la branche experiment/cache-redis 
commande: git log --graph --all --oneline --decorate

Q09: Sont ancien chemin étais src/utils.js
commande: git log --follow --name-only --oneline -- src/outils.js

Q10: C'est Nathan Robin avec 15 commit
commande: git shortlog -sn depart

Q11: 2026-03-24
commande: git show -s --format="%ad" --date=short v1.0.0

Q12: bannière de démarrage
commande: git log --grep="Revert" --oneline

Q13: de5637a
commande: git log --merges --grep="fix/valeur-totale" --oneline

Q14: 16
commande: git diff --numstat v0.1.0 v1.0.0 -- src/stock.js 

Q15: 6d6b920
commande: git log -S "TODO: gérer les quantités négatives" --oneline
