Utilisation

Le jeu charge une banque de questions (questions.json par défaut) dans le même répertoire racine qu'index.html. Ce fichier contient les ensembles de questions du jeu décrits dans la section suivante.

Scraping / Banque de questions
Pour faciliter la collecte de questions, j'ai inclus un script Python dans /util 

Le répertoire racine contient questions.json, qui est le fichier principal de questions. Le programme ne lit que questions.json.

Format des questions
La banque de questions est simplement un tableau de "jeux". Vous pouvez en avoir autant que vous le souhaitez. Vous les sélectionnez au début du chargement de index.html.

json
Copy code
{
    "games" : [
        {
            "questions" : [ ... ]
        },
        {
            "questions" : [ ... ]
        }, ...
    ]
}
Chaque tableau de questions a le format suivant.

"content" est la clé pour les textes de réponses possibles. "content" doit avoir une longueur de 4 (4 choix multiples).
Le texte de l'énoncé de la question est situé dans la clé "question".
L'index basé sur zéro de la valeur dans "content" qui est la réponse correcte est situé dans la clé "correct".json
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

Les sons et images utilisés de Qui Veut Gagner des Millions. Les matériaux sont utilisés dans le cadre de l'utilisation équitable à des fins académiques et éducatives, et ne doivent pas être redistribués sans permission de leurs créateurs.