################################# video juegos mas rentandos
SELECT
	count(*) veces_rentado, 
	vi.tittle
FROM
	rentals AS re
INNER JOIN videogames AS vi ON  re.videogame_id = vi.id
GROUP BY vi.id
ORDER BY veces_rentado DESC
	 