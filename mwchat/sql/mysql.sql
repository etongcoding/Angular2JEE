create database mwchatdb DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
grant all on mwchatdb.* to etongcoding@'%' identified by '.......';
grant all on mwchatdb.* to etongcoding@localhost identified by '.......';
quit;
mysql -uetongcoding -p
use mwchatdb;
create table if not exists users (
    id int (11) not null auto_increment,
    dlc datetime not null default current_timestamp,
    operatorid int (11) not null,
    createdate datetime not null,
    emailaddress varchar (50) not null,
    displayname varchar (50) not null,
    logofilename varchar (50) not null,
    password varchar (50) not null,
    primary key (id)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;
insert into users values(1, now(), 1, now(),'imuliping@gmail.com','<div class=MWBAT>li ping</div>', '1.png','imuliping');
insert into users values(2, now(), 1, now(),'test@gmail.com','<div class=EN>test</div>','2.png','test');
create table if not exists friends (
    id int (11) not null auto_increment,
    dlc datetime not null default current_timestamp,
    operatorid int (11) not null,
    createdate datetime not null,
    userid int(11) not null,
    friendid int (11) not null,
    primary key (id)
)ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;
create table if not exists messages (
    id int (11) not null auto_increment,
    dlc datetime not null default current_timestamp,
    operatorid int (11) not null,
    createdate datetime not null,
    fromuserid int (11) not null,
    touserid int (11) not null,
    message varchar (255),
    primary key (id)
)ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;
