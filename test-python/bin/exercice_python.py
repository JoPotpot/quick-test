#!/usr/bin/python2.7
# -*- coding: utf-8 -*-
# A lancer avec l'argument nb_articles
# Exemple : "python exercice_python.py 100" si on veut récupérer 100 articles
# Fichier json généré à récupérer sous quick-test/test-python/output/

# Liste de 100 premiers posts depuis https://jsonplaceholder.typicode.com/posts

import requests
import json
import sys

nb_articles = int(sys.argv[1])
file = open('../output/liste_100_posts.json', 'w')

json_text = requests.get('https://jsonplaceholder.typicode.com/posts/1').json()
file.write('[\n')
file.write(json.dumps(json_text))

for i in range(2, nb_articles+1):

    json_text = requests.get('https://jsonplaceholder.'
                             'typicode.com/posts/' + str(i)).json()
    file.write(',\n')
    file.write(json.dumps(json_text))

file.write('\n]')
file.close()