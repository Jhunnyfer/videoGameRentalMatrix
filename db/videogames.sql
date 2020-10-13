/*
 Navicat Premium Data Transfer

 Source Server         : Local
 Source Server Type    : MySQL
 Source Server Version : 100411
 Source Host           : localhost:3306
 Source Schema         : videogames

 Target Server Type    : MySQL
 Target Server Version : 100411
 File Encoding         : 65001

 Date: 12/10/2020 23:48:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for brands
-- ----------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of brands
-- ----------------------------
INSERT INTO `brands` VALUES (1, 'EA');
INSERT INTO `brands` VALUES (2, 'Microsoft');
INSERT INTO `brands` VALUES (3, 'Nintendo');
INSERT INTO `brands` VALUES (4, 'Ubisoft');
INSERT INTO `brands` VALUES (5, 'Konami');
INSERT INTO `brands` VALUES (6, 'SEGA');
INSERT INTO `brands` VALUES (7, 'Zynga');

-- ----------------------------
-- Table structure for consoles
-- ----------------------------
DROP TABLE IF EXISTS `consoles`;
CREATE TABLE `consoles`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `console` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of consoles
-- ----------------------------
INSERT INTO `consoles` VALUES (1, 'Xbox');
INSERT INTO `consoles` VALUES (2, 'PlayStation 1');
INSERT INTO `consoles` VALUES (3, 'Nintendo');
INSERT INTO `consoles` VALUES (4, 'PC');

-- ----------------------------
-- Table structure for credits
-- ----------------------------
DROP TABLE IF EXISTS `credits`;
CREATE TABLE `credits`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `videogame_id` int(11) NULL DEFAULT NULL,
  `full_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `rol_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `credit_gamesfk`(`videogame_id`) USING BTREE,
  INDEX `credit_rolfk`(`rol_id`) USING BTREE,
  CONSTRAINT `credit_gamesfk` FOREIGN KEY (`videogame_id`) REFERENCES `videogames` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `credit_rolfk` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of credits
-- ----------------------------
INSERT INTO `credits` VALUES (1, 1, 'Credit 1', 1);
INSERT INTO `credits` VALUES (2, 1, 'Credit 2', 2);
INSERT INTO `credits` VALUES (3, 1, 'Credit 3', 1);

-- ----------------------------
-- Table structure for genres
-- ----------------------------
DROP TABLE IF EXISTS `genres`;
CREATE TABLE `genres`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of genres
-- ----------------------------
INSERT INTO `genres` VALUES (1, 'Accion');
INSERT INTO `genres` VALUES (2, 'Comedia');
INSERT INTO `genres` VALUES (3, 'Terror');
INSERT INTO `genres` VALUES (4, 'Musical');
INSERT INTO `genres` VALUES (5, 'Ciencia ficción');
INSERT INTO `genres` VALUES (6, 'Crimen');
INSERT INTO `genres` VALUES (10, 'Adultos');
INSERT INTO `genres` VALUES (11, 'Infantil');
INSERT INTO `genres` VALUES (12, 'Crimen');
INSERT INTO `genres` VALUES (13, 'rol');

-- ----------------------------
-- Table structure for rentals
-- ----------------------------
DROP TABLE IF EXISTS `rentals`;
CREATE TABLE `rentals`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NULL DEFAULT NULL,
  `videogame_id` int(255) NULL DEFAULT NULL,
  `rental_date` date NOT NULL,
  `return_date` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_user`(`user_id`) USING BTREE,
  INDEX `fk_game`(`videogame_id`) USING BTREE,
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_game` FOREIGN KEY (`videogame_id`) REFERENCES `videogames` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rentals
-- ----------------------------
INSERT INTO `rentals` VALUES (17, 3, 1, '2020-10-13', NULL);
INSERT INTO `rentals` VALUES (18, 3, 1, '2020-10-13', NULL);
INSERT INTO `rentals` VALUES (19, 2, 1, '2020-10-13', NULL);
INSERT INTO `rentals` VALUES (20, 1, 1, '2020-10-13', NULL);
INSERT INTO `rentals` VALUES (21, 1, 1, '2020-10-13', NULL);
INSERT INTO `rentals` VALUES (22, 1, 1, '2020-10-13', NULL);
INSERT INTO `rentals` VALUES (23, 1, 1, '2020-10-13', NULL);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'Director');
INSERT INTO `roles` VALUES (2, 'Actor');
INSERT INTO `roles` VALUES (3, 'Actriz');
INSERT INTO `roles` VALUES (5, 'Marca');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identification` int(255) NOT NULL,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `birth_date` date NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL,
  `date_created` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 1017193878, 'Alvaro Uribe Cardona', 'Calle 1', '3113135042', '1991-03-21', 'j@gmail.com', 'jmena', '12345', 1, '2020-10-12 20:36:22');
INSERT INTO `users` VALUES (2, 5434534, 'Carlos Andres Puerta', 'Calle 2', '2147483647', '1992-02-21', 'jd@gmail.com', 'jcarlo', '12345', 2, '2020-10-12 19:16:18');
INSERT INTO `users` VALUES (3, 15852223, 'Maria Rueda', 'Calle 3', '3116854856', '1993-05-14', 'mr@gmail.com', 'mrueda', '12345', 1, '2020-10-12 20:37:07');

-- ----------------------------
-- Table structure for videogames
-- ----------------------------
DROP TABLE IF EXISTS `videogames`;
CREATE TABLE `videogames`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` int(10) NULL DEFAULT NULL,
  `genre_id` int(11) NULL DEFAULT NULL,
  `tittle` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `console_id` int(11) NULL DEFAULT NULL,
  `price` int(11) NULL DEFAULT NULL,
  `year` int(11) NULL DEFAULT NULL,
  `min_age` int(11) NULL DEFAULT NULL,
  `brand_id` int(11) NULL DEFAULT NULL,
  `status` tinyint(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_genre`(`genre_id`) USING BTREE,
  INDEX `videogames_brfk`(`brand_id`) USING BTREE,
  INDEX `viedogame_clfk`(`console_id`) USING BTREE,
  CONSTRAINT `videogames_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `videogames_brfk` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `viedogame_clfk` FOREIGN KEY (`console_id`) REFERENCES `consoles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of videogames
-- ----------------------------
INSERT INTO `videogames` VALUES (1, 3, 2, 'Bloodborne', 'Bloodborne', 1, 1500, 2010, 12, 1, 1);
INSERT INTO `videogames` VALUES (2, 4, 1, 'Nex Machina', 'Nex Machina', 1, 1400, 2019, 12, 1, 1);
INSERT INTO `videogames` VALUES (3, 5, 1, 'Uncharted 4', 'Uncharted 4', 1, 1500, 2020, 12, 2, 1);
INSERT INTO `videogames` VALUES (4, 6, 4, 'Far Cry 5', 'Far Cry 5', 2, 2000, 2017, 18, 2, 1);
INSERT INTO `videogames` VALUES (6, 7, 1, 'Need For Speed Rivals', 'prueba', 1, 1500, 2005, 12, 1, 1);
INSERT INTO `videogames` VALUES (7, 8, 1, 'Need For Speed Most Wanted', 'prueba', 4, 1500, 1992, 12, 4, 1);
INSERT INTO `videogames` VALUES (8, 9, 1, 'eed For Speed The Run', 'prueba', 3, 1500, 2001, 12, 3, 1);

SET FOREIGN_KEY_CHECKS = 1;
