CREATE TABLE rects (
	rect_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	rect_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	width DECIMAL(10,2),
    height DECIMAL(10,2),
	color VARCHAR(7),
	freq INT UNSIGNED,
	border int UNSIGNED,
	borderradius INT UNSIGNED,
	animate INT UNSIGNED,
	PRIMARY KEY(rect_id)
);
    
INSERT INTO rects (width, height, color, freq, border, borderradius, animate)
VALUES (300, 200, '#ff0000', 1, 1, 2, 1);
