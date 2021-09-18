# ORM E-Commerce Backend
Object Relational Mapping (ORM) E-Commerce back end built using MySQL2, Express and Sequelize (using Postman for route testing)

<p align="center">
 <img src="https://img.shields.io/github/repo-size/ssharp0/team-summary-generator">
 <img src="https://img.shields.io/badge/Javascript-yellow">
 <img src="https://img.shields.io/badge/-node.js-green">
 <img src="https://img.shields.io/badge/-MySQL2-purple">
 <img src="https://img.shields.io/badge/-express npm-brown">
 <img src="https://img.shields.io/badge/-sequelize npm-blue">
 <img src="https://img.shields.io/badge/-dotenv npm-grey">
</p>

<br>

### [Walkthough Video](https://drive.google.com/file/d/1-bvmt3gxuQ31gAP2pBIlxmAj91hRgrrS/view?usp=sharing)

### [Github Repo](https://github.com/ssharp0/orm-ecommerce-backend)

#### Gif video demo:

![](/assets/img/full-walkthrough.gif)

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Usage](#usage)
- [Installation](#installation)
- [Screenshots](#screenshots)

## Description

This is a back end application for an e-commerce site. 

Express.js is used for the server and MySQL for the database, this app also uses Sequelize as the ORM to run SQL queries and models. 

The database includes tables for categories, products, products tags, and tags (defined by models). 

RESTful API routes are used to make requests (GET, POST, PUT, DELETE) to/from the database through Sequelize queries. 

Postman was used to test and demonstrate route requests.

Note, this app uses the dotenv package to use environment variables to store sensitive data (MySQL username and password)

## User Story

Back end application for an e-commerce website

## Usage

User will need to install all dependencies and packages as noted in installation. (Node.js & MySQL must be installed)

The user will first need to use the MySQL shell in the terminal to create and use the database schema (using their username and password).

`mysql -u root -p`

`source db/schema.sql`  

`use ecommerce_db`

`quit`

Then the user will need to seed the database with dummy data (which will use the seeds files):

`npm run seed`

Then the user will need to start the server:

`npm start` or `node server.js`

Use an application like Postman or Insomnia to GET, POST, PUT, DELETE from different routes.

Note: route walkthrough was done using Postman.


## Installation

`npm init -y`

`npm i mysql2`

`npm i sequelize`

`npm i express`

`npm i dotenv`

## Screenshots

Postman Routes Example (refer to video walkthrough for more information)

![](/assets/img/postman-route-testing.png)

