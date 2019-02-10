# React-Native
Projet sur React Native, dans le cadre du cours de l'ECV Digital. L'équipe est composée de trois personnes :
- Mathieu NIBAS
- Florian RAMBUR
- Jordan JUVENTIN

## Le projet
Nous avons développé une petite application, permettant de récupérer des informations sur un libre en en scannant le code barre. Une fois ce code barre scanné, on se voit redirigé vers la page présentnt les informations désirées. Le livre est aussi enregistré dans l'historique des recherches, qui nous permet de retourné à un ouvrage précédent sans avoir à rescanner le code.

## Avancement
L'application est globalement fonctionnelle. Le scan de code barre, le fetch API des informations, la navigation entre les onglets, le store, ... tout ceci fonctionne.  
Un détil est à avancer toutefois : l'API Google Books ne référence pas **tous** les livres existant. Il est donc possible que vous ne puissiez obtenir les informations désirées si vous tombez sur un des bouquins non référencés.
Aussi, nous sommes tombés face à un bug, qui concerne le rafraîchissement de nos Components qui servent d'écrans. Ceux-ci ne se rafraîchissent pas, cependant que le store, lui, se rafraîchit. Ceci implique donc que notre vue ne reflète pas correctement le contenu du store.  
  
Nous avons donc laissé le code en l'état, avec les `console.log`, vous permettant d'observer l'état du store, bien que la vue ne vous le permette pas.

## ISBN Fonctionnel 

![ISBN Harry Potter](https://cdn.discordapp.com/attachments/390055571258343424/543488452138762240/unknown.png)
