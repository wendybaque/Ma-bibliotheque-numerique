-- phpMyAdmin SQL Dump

-- version 4.5.4.1deb2ubuntu2

-- http://www.phpmyadmin.net

--

-- Client :  localhost

-- Généré le :  Jeu 26 Octobre 2017 à 13:53

-- Version du serveur :  5.7.19-0ubuntu0.16.04.1

-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET time_zone = "+00:00";

use books_schema;

DROP TABLE IF EXISTS books;

create table
    books (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        desc LONGTEXT NOT NULL,
        img VARCHAR(500) NOT NULL,
        opinion INT NOT NULL,
        genre INT NOT NULL,
        publisher INT NOT NULL,
        CONSTRAINT `fk_publisher` FOREIGN KEY (`publisher`) REFERENCES `bibliotheque_numerique`.`publisher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_genre` FOREIGN KEY (`genre`) REFERENCES `bibliotheque_numerique`.`genre` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_opinion` FOREIGN KEY (`opinion`) REFERENCES `bibliotheque_numerique`.`opinion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

insert into
    books (
        title,
        author,
        desc,
        img,
        opinion,
        publsiher,
        genre
    )
values (
        "Entre ciel et Lou",
        "Lorraine Fouchet",
        "Jo vient de perdre l amour de sa vie, son souffle, son rire et son appétit : Lou.",
        'https://images-eu.ssl-images-amazon.com/images/I/51ZEwDXal5L._SX210_.jpg',
        1,
        2,
        2
    );

insert into
    books (
        title,
        author,
        desc,
        img,
        opinion,
        publisher,
        genre
    )
values (
        "Bye bye Blondie",
        "Virginie Despentes",
        "Gloria est convaincue qu à chaque fois qu elle s approche trop près du bord, elle saura faire pirouette arrière.",
        'https://static.fnac-static.com/multimedia/FR/images_produits/FR/Fnac.com/ZoomPE/0/4/4/9782253112440/tsp20130901121804/Bye-bye-Blondie.jpg',
        2,
        2,
        4
    );

insert into
    books (
        title,
        author,
        desc,
        img,
        opinion,
        publisher,
        genre
    )
values (
        "La possibilité d'une île",
        "Michel Houellebecq",
        'Roman d anticipation autant que de mise en garde. La possibilité d une île est aussi une réflexion sur la puissance de l amour.',
        'https://www.jailu.com/media/cache/couverture_medium/flammarion_img/Couvertures/9782290069905.jpg',
        3,
        2,
        2
    );

insert into
    books (
        title,
        author,
        desc,
        img,
        opinion,
        publisher,
        genre
    )
values (
        "Les dangers de la lumière",
        "Wendy Baqué",
        'Alice est une sorte de punk désabusée par une vie qu elle ne veut pas vivre et qui rêve d être ingénieur lumière. Dans une époque où la jeunesse subit trop de contraintes, elle peine à faire entendre sa voix. ',
        'https://www.babelio.com/couv/CVT_Les-dangers-de-la-lumiere_8495.jpg',
        1,
        3,
        5
    );

insert into
    books (
        title,
        author,
        desc,
        img,
        opinion,
        publisher,
        genre
    )
values (
        "Les brumes de l'apparence",
        "Frédérique Deghelt",
        "Gabrielle est une quadragénaire parisienne bien installée dans sa vie citadine et rationnelle. Quand on lui annonce qu'elle hérite d'une masure au milieu de nulle part, elle s'élance sur les routes de France, déterminée à s’en débarrasser au plus vite. Elle trouve une maison enfouie dans les bois, délabrée, et dix hectares alentour, traversés par le bruissement d'une rivière.",
        'https://i0.wp.com/www.frederiquedeghelt.com/wp-content/uploads/2019/09/frederique-deghelt-actes-sud-lesbrumesdelapparence-.jpg?resize=450%2C849&ssl=1',
        4,
        3,
        5
    );

insert into
    books (
        title,
        author,
        desc,
        img,
        opinion,
        publisher,
        genre
    )
values (
        "Si le soleil se dérobe",
        "Nicole Dennis-Benn",
        "Patsy est une jeune femme jamaïcaine, coincée entre une mère obsédée par la religion et une petite fille qu'elle ne sait pas tout à fait comment aimer. Son obsession est de quitter l'île pour l'Amérique, terre de libertés, et aussi - surtout ? - le pays où s'est exilée Cicely. La meilleure amie d'enfance, mais aussi l'amour secret, l'objet de tous les désirs. ",
        'https://m.media-amazon.com/images/I/517TNiAFrvL._SX195_.jpg',
        2,
        3,
        6
    );

insert into
    books (
        title,
        author,
        desc,
        img,
        opinion,
        publisher,
        genre
    )
values (
        "Je tiendrai ma vie entre mes mains",
        "Andraroc",
        "L’année de ses vingt-huit ans, Alice Marlier est certaine de ne jamais l’oublier. Emma, sa meilleure amie atteinte d’une maladie, vient de mourir. Alice est dévastée par la douleur et le manque de sa moitié. Mais la défunte avait tout prévu et lui avait confié un carnet avec une liste de dernières volontés à exaucer.",
        'https://images-na.ssl-images-amazon.com/images/I/71U9jf7Is9S.jpg',
        1,
        3,
        6
    );

insert into
    books (
        title,
        author,
        desc,
        img,
        opinion,
        publisher,
        genre
    )
values (
        "Eclats de Silicium",
        "KeoT",
        "Sept nouvelles autour du hacking, de la surveillance, de l'intelligence artificielle, des interfaces humain-machine et autres thèmes high-tech.",
        'https://images-eu.ssl-images-amazon.com/images/I/51WsXAW6poL._SX195_.jpg',
        1,
        2,
        3
    );

DROP TABLE IF EXISTS publisher;

create table
    publisher (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        publisher VARCHAR(50)
    );

insert into publisher (publisher) values ('Fayard');

insert into publisher (publisher) values ('Livre de Poche');

insert into publisher (publisher) values ('Plumes de Mimi');

insert into publisher (publisher) values ('Cherche Midi');

insert into publisher (publisher) values ('Babel');

insert into publisher (publisher) values ('Pocket');

insert into publisher (publisher) values ('France Loisirs');

insert into publisher (publisher) values ('Plumes de Papier');

insert into publisher (publisher) values ('Hachette');

insert into publisher (publisher) values ('Michel Lafon');

insert into publisher (publisher) values ('Odile Jacob');

insert into publisher (publisher) values ('Auto édition');

DROP TABLE IF EXISTS genre;

create table
    genre (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        genre VARCHAR(50)
    );

insert into genre (genre) values ('Romance');

insert into genre (genre) values ('Poésie');

insert into genre (genre) values ('Science-fiction');

insert into genre (genre) values ('Fantaisy/Fantastique');

insert into genre (genre) values ('Feel-good');

insert into genre (genre) values ('Action');

insert into genre (genre) values ('Policier/Thriller');

insert into genre (genre) values ('Nouvelle');

insert into genre (genre) values ('Essai');

insert into genre (genre) values ('Humour');

insert into genre (genre) values ('Jeunesse');

insert into genre (genre) values ('Témoignage');

DROP TABLE IF EXISTS opinion;

create table
    opinion (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        opinion VARCHAR(50)
    );

insert into opinion (opinion) values ('Coup de coeur');

insert into opinion (opinion) values ('Excellent');

insert into opinion (opinion) values ('Très bien');

insert into opinion (opinion) values ('Bien');

insert into opinion (opinion) values ('Bof');

insert into opinion (opinion) values ('Pas pour moi');

insert into opinion (opinion) values ('Abandon');