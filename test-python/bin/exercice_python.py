#!/usr/bin/python2.7
#-*- coding: utf-8 -*-
# à lancer avec l'argument nb_articles
# exemple : "python exercice_python.py 100" si on veut récupérer 100 articles 
# fichier json généré à récupérer sous quick-test/test-python/output/

#Liste des 100 premiers posts depuis https://jsonplaceholder.typicode.com/posts'

import requests
import json
import sys

nb_articles = int(sys.argv[1])
file = open('../output/liste_100_posts.json','w')


jsonText = requests.get('https://jsonplaceholder.typicode.com/posts/1').json()
file.write('[\n')
file.write(json.dumps(jsonText))

for i in range (2,nb_articles+1):

	jsonText = requests.get('https://jsonplaceholder.typicode.com/posts/'+str(i)).json()
	file.write(',\n')
	file.write(json.dumps(jsonText))

	
	
file.write('\n]')
file.close()
