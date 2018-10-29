/*
Navicat MySQL Data Transfer

Source Server         : Database
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : zolshopping

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-29 08:50:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `idx` int(3) NOT NULL,
  `goodstype` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `sellnumber` int(11) DEFAULT NULL,
  `settime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idx`,`goodstype`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'phone', '华为', 'PdaPro', '4999', '../images/phone/phone1.jpg', '109999', '2018-10-28 00:22:33');
INSERT INTO `goods` VALUES ('2', 'phone', '华为', 'Play', '1999', '../images/phone/phone2.jpg', '19999', '2018-10-23 15:18:28');
INSERT INTO `goods` VALUES ('3', 'phone', '小米', 'dasf', '1599', '../images/phone/phone3.jpg', '185671', '2018-10-28 00:22:36');
INSERT INTO `goods` VALUES ('4', 'phone', '小米', 'dasf', '4999', '../images/phone/phone4.jpg', '135637', '2018-10-28 00:22:38');
INSERT INTO `goods` VALUES ('5', 'phone', '锤子', 'spgf', '2399', '../images/phone/phone5.jpg', '45662', '2018-10-28 00:22:42');
INSERT INTO `goods` VALUES ('6', 'phone', '锤子', 'plus', '3899', '../images/phone/phone6.jpg', '78904', '2018-10-23 15:18:34');
INSERT INTO `goods` VALUES ('7', 'phone', '苹果', 'plus', '5999', '../images/phone/phone7.jpg', '345678', '2018-10-23 15:18:35');
INSERT INTO `goods` VALUES ('8', 'phone', '苹果', 'ffwge', '8999', '../images/phone/phone8.jpg', '38097', '2018-10-28 00:22:44');
INSERT INTO `goods` VALUES ('9', 'phone', '三星', 'sgfewg', '6888', '../images/phone/phone9.jpg', '490174', '2018-10-28 00:22:46');
INSERT INTO `goods` VALUES ('10', 'phone', '三星', 'zywd', '5199', '../images/phone/phone0.jpg', '189021', '2018-10-28 00:22:48');
INSERT INTO `goods` VALUES ('11', 'diy', '三星', 'ixtsg', '7890', '../images/diy/diy0.jpg', '678120', '2018-10-28 00:22:50');
INSERT INTO `goods` VALUES ('12', 'diy', '华硕', 'izyhj', '7890', '../images/diy/diy1.jpg', '67810', '2018-10-28 00:22:53');
INSERT INTO `goods` VALUES ('13', 'diy', '华硕', 'zytyhw', '7890', '../images/diy/diy2.jpg', '47810', '2018-10-28 00:22:55');
INSERT INTO `goods` VALUES ('14', 'diy', '戴尔', 'qztsh', '7890', '../images/diy/diy3.jpg', '67610', '2018-10-28 00:22:57');
INSERT INTO `goods` VALUES ('15', 'diy', '戴尔', 'intyz', '7890', '../images/diy/diy4.jpg', '167810', '2018-10-28 00:22:59');
INSERT INTO `goods` VALUES ('16', 'diy', '苹果', 'inwr', '7890', '../images/diy/diy5.jpg', '267810', '2018-10-28 00:23:01');
INSERT INTO `goods` VALUES ('17', 'diy', '苹果', 'sxjsd', '7890', '../images/diy/diy6.jpg', '97810', '2018-10-28 00:23:03');
INSERT INTO `goods` VALUES ('18', 'diy', '罗技', 'lxetg', '7890', '../images/diy/diy7.jpg', '17810', '2018-10-28 00:23:05');
INSERT INTO `goods` VALUES ('19', 'diy', '罗技', 'deujfc', '7890', '../images/diy/diy8.jpg', '127810', '2018-10-28 00:23:08');
INSERT INTO `goods` VALUES ('20', 'diy', '东芝', 'aprg', '7890', '../images/diy/diy9.jpg', '1167810', '2018-10-28 00:23:10');
INSERT INTO `goods` VALUES ('21', 'computer', '联想', 'tfsgf', '10999', '../images/computer/pc0.png', '102310', '2018-10-28 00:23:21');
INSERT INTO `goods` VALUES ('22', 'computer', '联想', 'thtds', '12999', '../images/computer/pc1.png', '11331', '2018-10-28 00:23:23');
INSERT INTO `goods` VALUES ('23', 'computer', '华硕', 'zxykj', '9998', '../images/computer/pc2.png', '10231', '2018-10-28 00:23:29');
INSERT INTO `goods` VALUES ('24', 'computer', '华硕', 'qxjgfg', '5988', '../images/computer/pc3.png', '110023', '2018-10-28 00:23:30');
INSERT INTO `goods` VALUES ('25', 'computer', '东芝', 'yhstrb', '6900', '../images/computer/pc4.png', '102031', '2018-10-28 00:23:33');
INSERT INTO `goods` VALUES ('26', 'computer', '东芝', 'zfdhyhj', '5600', '../images/computer/pc5.png', '1231', '2018-10-28 00:23:35');
INSERT INTO `goods` VALUES ('27', 'computer', '戴尔', 'ahdrhd', '9800', '../images/computer/pc6.png', '98790', '2018-10-28 00:23:38');
INSERT INTO `goods` VALUES ('28', 'computer', '戴尔', 'thfzg', '6666', '../images/computer/pc7.png', '6901', '2018-10-28 00:23:41');
INSERT INTO `goods` VALUES ('29', 'computer', '三星', 'wrcxv', '4690', '../images/computer/pc8.png', '10981', '2018-10-28 00:23:44');
INSERT INTO `goods` VALUES ('30', 'computer', '三星', 'wrjegf', '9999', '../images/computer/pc9.png', '2987', '2018-10-28 00:23:47');
INSERT INTO `goods` VALUES ('31', 'shuma', '索尼', 'xmherej', '29999', '../images/shuma/sm0.jpg', '43194', '2018-10-28 00:23:49');
INSERT INTO `goods` VALUES ('32', 'shuma', '索尼', 'xmdbvf', '19999', '../images/shuma/sm1.jpg', '141345', '2018-10-28 00:23:52');
INSERT INTO `goods` VALUES ('33', 'shuma', '佳能', 'smgwergf', '5999', '../images/shuma/sm2.jpg', '43645', '2018-10-28 00:23:54');
INSERT INTO `goods` VALUES ('34', 'shuma', '佳能', 'xxgareg', '7999', '../images/shuma/sm3.jpg', '123246', '2018-10-28 00:23:57');
INSERT INTO `goods` VALUES ('35', 'shuma', '三星', 'spfwef', '8712', '../images/shuma/sm4.jpg', '98210', '2018-10-28 00:24:03');
INSERT INTO `goods` VALUES ('36', 'shuma', '三星', 'qdgwe', '4900', '../images/shuma/sm5.jpg', '170920', '2018-10-28 00:24:06');
INSERT INTO `goods` VALUES ('37', 'shuma', '华硕', 'ervgewrvg', '5499', '../images/shuma/sm6.jpg', '43560', '2018-10-28 00:24:08');
INSERT INTO `goods` VALUES ('38', 'shuma', '华硕', 'qwvwre', '13999', '../images/shuma/sm7.jpg', '99801', '2018-10-28 00:24:10');
INSERT INTO `goods` VALUES ('39', 'shuma', '戴尔', 'vbgwe', '10999', '../images/shuma/sm8.jpg', '100011', '2018-10-28 00:24:13');
INSERT INTO `goods` VALUES ('40', 'shuma', '戴尔', 'xvgvre', '6799', '../images/shuma/sm9.jpg', '1457647', '2018-10-28 00:24:16');
INSERT INTO `goods` VALUES ('41', 'home', '华为', 'zwegvc', '3999', '../images/home/h0.jpg', '129999', '2018-10-28 00:24:18');
INSERT INTO `goods` VALUES ('42', 'home', '华为', 'ergrgvc', '999', '../images/home/h1.jpg', '19999', '2018-10-28 00:24:21');
INSERT INTO `goods` VALUES ('43', 'home', '小米', 'tyvgrwv', '2999', '../images/home/h2.jpg', '10299', '2018-10-28 00:24:23');
INSERT INTO `goods` VALUES ('44', 'home', '小米', 'aygvcv', '699', '../images/home/h3.jpg', '999', '2018-10-28 00:24:26');
INSERT INTO `goods` VALUES ('45', 'home', '格力', 'ctrgvcc', '789', '../images/home/h4.jpg', '5890', '2018-10-28 00:24:28');
INSERT INTO `goods` VALUES ('46', 'home', '海信', 'qegrvc', '2399', '../images/home/h5.jpg', '98001', '2018-10-28 00:24:30');
INSERT INTO `goods` VALUES ('47', 'home', '美的', 'bygrevc', '1288', '../images/home/h6.jpg', '3908', '2018-10-28 00:24:33');
INSERT INTO `goods` VALUES ('48', 'home', '东芝', 'buvgrewvc', '255', '../images/home/h7.jpg', '34780', '2018-10-28 00:24:35');
INSERT INTO `goods` VALUES ('49', 'home', '三菱', 'xrgrwgvc', '399', '../images/home/h8.jpg', '19800', '2018-10-28 00:24:38');
INSERT INTO `goods` VALUES ('50', 'home', '佳能', 'bzfrevc', '799', '../images/home/h9.jpg', '9634', '2018-10-28 00:24:40');
SET FOREIGN_KEY_CHECKS=1;
