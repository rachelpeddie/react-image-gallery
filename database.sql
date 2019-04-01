CREATE TABLE galleryItems (
	id SERIAL PRIMARY KEY,
	path text NOT NULL,
	description varchar(200) NOT NULL,
	likes int NOT NULL
);

INSERT INTO galleryItems (path, description, likes)
VALUES ('images/goat_small.jpg','Photo of a goat taken at Glacier National Park.', 0 ),
('https://r.hswstatic.com/w_907/gif/tesla-cat.jpg', 'Photo of a black cat.', 0),
('https://vignette.wikia.nocookie.net/lionking/images/b/bf/Giraffestanding.png/revision/latest?cb=20160920155142', 'Photo of cool giraffe', 0);