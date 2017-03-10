USE cursophp;

CREATE TABLE pelicula (
	idpelicula INTEGER NOT NULL,
	titulo VARCHAR(255) NOT NULL,	
	fechaestreno DATE,	
	duracion SMALLINT,
	urlpelicula VARCHAR(255),
	urlimagen VARCHAR(255),
    PRIMARY KEY (idpelicula)
);

CREATE TABLE genero (
    idgenero INTEGER NOT NULL,  
    nombregenero VARCHAR(50) NOT NULL,
    PRIMARY KEY (idgenero)
);

CREATE TABLE compania (
    idcompania INTEGER NOT NULL,  
    nombrecompania VARCHAR(50) NOT NULL,
	urllogo VARCHAR(255),
    PRIMARY KEY (idcompania)
);

CREATE TABLE actor (
	idactor INTEGER NOT NULL,
	nombre VARCHAR(75) NOT NULL,	
	fechanacimiento DATE,
	lugarnacimiento VARCHAR(100),	
	fechamuerte DATE,	
	urlactor VARCHAR(255),
	urlimagenactor VARCHAR(255),
    PRIMARY KEY (idactor)
);

CREATE TABLE generospelicula (    
	idpelicula INTEGER NOT NULL,
    idgenero INTEGER NOT NULL,      
	FOREIGN KEY (idpelicula) REFERENCES pelicula(idpelicula),
	FOREIGN KEY (idgenero) REFERENCES genero(idgenero),
    PRIMARY KEY (idpelicula,idgenero)
);

CREATE TABLE companiaspelicula (    
	idpelicula INTEGER NOT NULL,
    idcompania INTEGER NOT NULL,
	FOREIGN KEY (idpelicula) REFERENCES pelicula(idpelicula),
	FOREIGN KEY (idcompania) REFERENCES compania(idcompania),	
    PRIMARY KEY (idpelicula,idcompania)
);

CREATE TABLE reparto (    
	idpelicula INTEGER NOT NULL,
    idactor INTEGER NOT NULL,      
	papel VARCHAR(75) NOT NULL,
	FOREIGN KEY (idpelicula) REFERENCES pelicula(idpelicula),
	FOREIGN KEY (idactor) REFERENCES actor(idactor),
	PRIMARY KEY (idpelicula,idactor,papel)
);

