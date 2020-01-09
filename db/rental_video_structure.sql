/*
Navicat MySQL Data Transfer

Source Server         : Local
Source Server Version : 50728
Source Host           : 127.0.0.1:3306
Source Database       : rental_video

Target Server Type    : MYSQL
Target Server Version : 50728
File Encoding         : 65001

Date: 2020-01-09 14:22:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for credit
-- ----------------------------
DROP TABLE IF EXISTS `credit`;
CREATE TABLE `credit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `film_id` int(11) DEFAULT NULL,
  `full_name` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of credit
-- ----------------------------
INSERT INTO `credit` VALUES ('1', '1', 'Credit 1', '1');
INSERT INTO `credit` VALUES ('2', '1', 'Credit 2', '2');
INSERT INTO `credit` VALUES ('3', '1', 'Credit 3', '1');

-- ----------------------------
-- Table structure for film
-- ----------------------------
DROP TABLE IF EXISTS `film`;
CREATE TABLE `film` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` int(10) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL,
  `tittle` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `description` text CHARACTER SET latin1,
  `price` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `min_age` int(11) DEFAULT NULL,
  `running_time` int(5) DEFAULT NULL COMMENT 'Running time of film',
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_genre` (`genre_id`),
  CONSTRAINT `fk_genre` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of film
-- ----------------------------
INSERT INTO `film` VALUES ('1', '1', '1', 'Escape Room', '1', '2000', '2019', '12', '120', '1');
INSERT INTO `film` VALUES ('2', '2', '2', 'Rust Creek', '2', '3000', '2019', '5', '180', '1');
INSERT INTO `film` VALUES ('3', '3', '1', 'American Hangman', '3', '4000', '2019', '15', '160', '1');
INSERT INTO `film` VALUES ('4', '4234', '1', 'Kjjjjjj', 'jjjASD', '234', '2344', '23', '12', '1');
INSERT INTO `film` VALUES ('5', '5', '1', 'The Upside', '5', '4000', '2019', '5', '160', '1');
INSERT INTO `film` VALUES ('6', '6', '1', 'Replicas', '6', '4000', '2019', '6', '160', '1');
INSERT INTO `film` VALUES ('7', '7', '1', 'Glass', '7', '4000', '2019', '7', '160', '1');
INSERT INTO `film` VALUES ('8', '8', '1', 'Captain Marvel', '8', '4000', '2019', '12', '160', '1');
INSERT INTO `film` VALUES ('9', '4234', '1', 'Kjjjjjj', 'jjjASD', '234', '2344', '23', '12', '1');
INSERT INTO `film` VALUES ('10', '123', '2', 'Titulo', 'Descripcion', '190000', '1900', '12', '23', '1');

-- ----------------------------
-- Table structure for genre
-- ----------------------------
DROP TABLE IF EXISTS `genre`;
CREATE TABLE `genre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of genre
-- ----------------------------
INSERT INTO `genre` VALUES ('1', 'Accion');
INSERT INTO `genre` VALUES ('2', 'Comedia');
INSERT INTO `genre` VALUES ('3', 'Terror');
INSERT INTO `genre` VALUES ('4', 'Musical');
INSERT INTO `genre` VALUES ('5', 'Ciencia ficción');
INSERT INTO `genre` VALUES ('6', 'Crimen');
INSERT INTO `genre` VALUES ('10', 'Adultos');
INSERT INTO `genre` VALUES ('11', 'Infantil');
INSERT INTO `genre` VALUES ('12', 'Crimen');

-- ----------------------------
-- Table structure for rental
-- ----------------------------
DROP TABLE IF EXISTS `rental`;
CREATE TABLE `rental` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `film_id` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `type_identification` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `identification` int(255) DEFAULT NULL,
  `full_name` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `address` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `telefone` int(20) DEFAULT NULL,
  `rental_date` date DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `code_user` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rental
-- ----------------------------
INSERT INTO `rental` VALUES ('2', '1', '1', '523456', 'Carlos Gonzales', 'Calle 1', '1234567', '2019-06-04', '2019-06-07', '99');
INSERT INTO `rental` VALUES ('3', '2', '2', '453456', 'Manuel Montoya', 'Calle 2', '1234567', '2019-06-04', '2019-06-07', '22');
INSERT INTO `rental` VALUES ('4', '3', '3', '123423', 'Jacob Mena', 'Calle 3', '1234567', '2019-06-04', '2019-06-07', '33');
INSERT INTO `rental` VALUES ('5', '1', '1', '123444', 'Manuel', '123098989', '1234545', '2020-01-08', null, '123');
INSERT INTO `rental` VALUES ('6', '1', '1', '123444', 'Manuel', '123098989', '1234545', '2019-06-04', '2019-06-06', '123');
INSERT INTO `rental` VALUES ('7', '1', '1', '1234568', 'Jhuma', 'Calle Luna', '1234545', '2020-01-08', null, '12');
INSERT INTO `rental` VALUES ('8', '2', '1', '1234567', 'Carlos Andres', 'Calle 104', '1233434', '2020-01-08', null, '12');
INSERT INTO `rental` VALUES ('9', '1', '1', '123455', 'Prueba', 'Calle 103', '1234545', '2020-01-08', null, '12');
INSERT INTO `rental` VALUES ('10', '1', '1', '2343434', 'Jhunnyfer Mena Arriaga', '12 de Octubre', '123456', '2020-01-08', null, '12');

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO `rol` VALUES ('1', 'Actor');
INSERT INTO `rol` VALUES ('2', 'Actriz');
SET FOREIGN_KEY_CHECKS=1;
