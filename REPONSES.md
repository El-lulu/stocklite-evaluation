# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 
commande: 

Q02: 
commande: 

Q03: 
commande: 

Q04: 
commande: 

Q05: 
commande: 

Q06: 
commande: 

Q07: 
commande: 

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
