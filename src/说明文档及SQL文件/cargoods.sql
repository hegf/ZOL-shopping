/*
Navicat MySQL Data Transfer

Source Server         : Database
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : zolshopping

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-29 08:50:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cargoods
-- ----------------------------
DROP TABLE IF EXISTS `cargoods`;
CREATE TABLE `cargoods` (
  `idx` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT '',
  `introduce` varchar(255) CHARACTER SET utf8 DEFAULT '',
  `price` varchar(255) CHARACTER SET utf8 DEFAULT '',
  `imgurl` varchar(255) CHARACTER SET utf8 DEFAULT '',
  `sellnumber` varchar(255) CHARACTER SET utf8 DEFAULT '',
  `settime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of cargoods
-- ----------------------------
INSERT INTO `cargoods` VALUES ('4', '小米', 'dasf', '4999', '../images/phone/phone4.jpg', '135637', null);
INSERT INTO `cargoods` VALUES ('7', '苹果', 'plus', '5999', '../images/phone/phone7.jpg', '345678', null);
INSERT INTO `cargoods` VALUES ('3', '小米', 'dasf', '1599', '../images/phone/phone3.jpg', '185671', null);
INSERT INTO `cargoods` VALUES ('9', '三星', 'sgfewg', '6888', '../images/phone/phone9.jpg', '490174', null);
SET FOREIGN_KEY_CHECKS=1;
