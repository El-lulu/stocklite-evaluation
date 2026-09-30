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

Q08: 
commande: 

Q09: 
commande: 

Q10: 
commande: 

Q11: 
commande: 

Q12: 
commande: 

Q13: 
commande: 

Q14: 
commande: 

Q15: 
commande: 
