#!/usr/bin/python2.7
#-*- coding: utf-8 -*-

import requests

f = open('../output/liste_100_posts.json','w')
f.write('Liste_des_100_premiers_posts_depuis_https://jsonplaceholder.typicode.com/posts')
f.close()

for i in range (1,101):
	r = requests.get('https://jsonplaceholder.typicode.com/posts/'+str(i))
	f = open('../output/liste_100_posts.json','a') 
	f.write('\n')
	f.write(str(r.json())) 
	f.close()
