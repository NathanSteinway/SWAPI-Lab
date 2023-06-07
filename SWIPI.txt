1) https://swapi.dev/api/people?search=Darth Vader

2) https://swapi.dev/api/planets?search=Alderaan

3) https://swapi.dev/api/starships?search=Millennium Falcon

4) https://swapi.dev/api/people/?search=C-3PO
   https://swapi.dev/api/species/2/
	
5) https://swapi.dev/api/people?search=Obi-Wan Kenobi
                https://swapi.dev/api/films/1/,
                https://swapi.dev/api/films/2/,
                https://swapi.dev/api/films/3/,
                https://swapi.dev/api/films/4/,
                https://swapi.dev/api/films/5/,
                https://swapi.dev/api/films/6/

6) https://swapi.dev/api/starships?search=Millennium Falcon

Pt2

1) Post request accepts a body. It's expecting a body object with a key of text and a string.
2) Array
3) https://practiceapi.devmountain.com/api/posts?id=555
4) 200, 409
5) https://practiceapi.devmountain.com/api/posts/filter?text=Nathan Elias Winters Winemiller Steinway
	[
		{
			"id": 1747,
			"text": "Nathan Elias Winters Winemiller Steinway",
			"date": "07 Jun 2023"
		}
	]
6) https://practiceapi.devmountain.com/api/posts?id=1747
	  {
		"id": 1748,
		"text": "mint green",
		"date": "07 Jun 2023"
	  }
7) https://practiceapi.devmountain.com/api/posts/filter?text=blue
8) application/json; charset=utf-8
9) you may get a 409 by not providing the req.body.text in these examples.
10)we get all posts because GET is not accepting queries according to the documentation.