-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 28, 2019 at 03:30 PM
-- Server version: 5.7.24
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `booklist`
--

DROP TABLE IF EXISTS `booklist`;
CREATE TABLE IF NOT EXISTS `booklist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(222) DEFAULT NULL,
  `author` varchar(222) DEFAULT NULL,
  `isbn` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booklist`
--

INSERT INTO `booklist` (`id`, `title`, `author`, `isbn`) VALUES
(81, 'asdfasdf', 'asdfasfd', 6767676),
(80, 'asdfasf', 'asdfasf', 23434),
(79, 'asdfadf', 'asdfafs', 999999999),
(78, 'asdf', 'fhffg', 56564545),
(77, 'fghfgh', '5645fgh', 89777667),
(76, 'ghjghj', 'dfgdfb', 567567),
(75, 'aasdfasf', 'asdfasd', 456345345),
(67, 'Database Management System', 'Anil Karki', 145834364),
(73, 'asdf', 'safasdf', 124234233),
(74, 'Database Management System', 'asdf', 234232423),
(72, 'Computer Organization', 'Anil Kaki', 123456789);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
