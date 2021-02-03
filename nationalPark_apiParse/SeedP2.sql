create database if not exists CampingPlannerDB;

use CampingPlannerDB;

create table Locations (
id int auto_increment not null,
url varchar(255) not null,
parkname varchar(255) not null,
address varchar(255) not null,
lattitude decimal not null,
longitude decimal not null,
state varchar(255) not null,
primary key (id)
);

create table Accounts (
Id int auto_increment not null,
Email varchar(55) not null,
Password varchar(55) not null,
FullName varchar(55) not null,
LocationKey int,
AnswersKey int,
Dates date,
primary key(id)
);

create table Equiptment(
Id int auto_increment,
ItemName varchar(155) not null,
ItemDecription varchar(155),
OwnedId boolean not null,
primary key(id)
);