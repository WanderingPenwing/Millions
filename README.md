# Qui veut gagner des millions ?

Une application de Paul Lagraula

# Utilisation
  
Le jeu charge une banque de questions (questions.js par défaut) dans le répertoire "js". Ce fichier contient les ensembles de questions des différents jeux chargés. Au démarrage de l'application, l'utilisateur peut séléctionner le jeu qu'il souhaite lancer (différentes collections de questions).


# Modification 

Ces questions, ont été collectés par un script Python localisé dans /util. Pour les mettre à jour, il suffit d'executer ce script.

Le script python retourne simplement un tableau de "jeux". Il peut être modifié pour intégrer plusieurs jeux (collections de questions). 
  
{
    "games" : [
        {
            "questions" : [ ... ] #jeu 1
        },
        {
            "questions" : [ ... ] #jeu 2
        }, ...
    ]
}
  
Chaque liste de questions, contient des éléments qui ontl e format suivant :
  
{
    "question" : "Qu'est-ce que l'Aurore boréale est communément appelée ?",
    "content" : [
        "Poussière de fée",
        "Aurores boréales",
        "Livre des âges",
        "Personnage principal de Game of Thrones"
    ],
    "correct" : 1
}
  
"question" : énoncé de la question
"content" : textes de réponses possibles. Il doit avoir une longueur de 4 (4 choix multiples).
"correct" : index (basé sur zéro) de la réponse correcte (correspondant au "content")


# Credits

Les sons et images utilisés de Qui Veut Gagner des Millions. Les matériaux sont utilisés dans le cadre de l'utilisation équitable à des fins académiques et éducatives, et ne doivent pas être redistribués sans permission de leurs créateurs.
