/*
Navicat MySQL Data Transfer

Source Server         : Database
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : zolshopping

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-29 08:50:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for zhucedenglu
-- ----------------------------
DROP TABLE IF EXISTS `zhucedenglu`;
CREATE TABLE `zhucedenglu` (
  `idx` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `settime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhucedenglu
-- ----------------------------
INSERT INTO `zhucedenglu` VALUES ('1', '18772519482', 'hgf12345', '2018-10-25 20:51:54');
INSERT INTO `zhucedenglu` VALUES ('14', '11111111111', 'hgf19930629', '2018-10-25 20:51:54');
INSERT INTO `zhucedenglu` VALUES ('12', '13668946005', 'hgf12345', '2018-10-25 20:51:54');
INSERT INTO `zhucedenglu` VALUES ('17', '12345678901', 'hgf321', '2018-10-25 20:53:17');
INSERT INTO `zhucedenglu` VALUES ('18', '12312312312', 'aaaaaa', '2018-10-25 20:57:30');
INSERT INTO `zhucedenglu` VALUES ('19', '12365478900', 'bbbbbb', '2018-10-25 20:59:24');
INSERT INTO `zhucedenglu` VALUES ('20', '67890123456', 'qqqqqq', '2018-10-25 21:02:39');
INSERT INTO `zhucedenglu` VALUES ('21', '21321536327', 'hehehe', '2018-10-25 21:21:40');
SET FOREIGN_KEY_CHECKS=1;
