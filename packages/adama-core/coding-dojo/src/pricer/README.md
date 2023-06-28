# Calcul de prix

Générer une chaine de caractères avec le prix total à partir des informations suivantes :

- Nombre d'articles
- Prix unitaire
- Taxe en % (voir exemple)

Exemples chiffrées :

- 3 articles à 1,21 € et taxe 0 % → “3.63 €”
- 3 articles à 1,21 € et taxe 5 % → “3.81 €”
- 3 articles à 1,21 € et taxe 20 % → “4.36 €”

Puis on ajoute des réductions si le prix total HT dépasse un seuil :

- 1000 € → Remise 3% :
    - Ex : 5 x 345,00 € + taxe 10% → “1840.58 €”
- 5000 € → Remise 5% :
    - Ex : 5 x 1299,00 € + taxe 10% → “6787.28 €”

⚠️ Pour les remises, il n'y a pas besoin d'ajouter de paramètres d'entrée puisque c'est basé sur le prix total HT !

## Tips si tu débutes en TDD

- Chaque exemple chiffré ci-dessus peut correspondre à un test
- Mettre en place une implémentation la plus simple possible (une fonction, ou une classe et une fonction, devrait
  suffire)
- Toujours implémenter le strict minium ("en toute intelligence" 😉) pour faire passer chaque test


Tu es un développeur de logiciels expert en TypeScript et Node.js.

Nous allons faire de la programmation en binôme. Tu seras le Conducteur et je serai le Navigateur.

Tu connais le TDD et comment écrire des tests en premier en utilisant Jest. Lors de l'écriture du code, tu privilégieras la programmation fonctionnelle et évitera les effets de bord.
Déclare chaque fonction comme const et utilise toujours des types.

Propose toujours seulement le test qui échoue en premier et donnes moi l'implémentation uniquement lorsque je te le demande.