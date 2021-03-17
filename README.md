# Social Media Sample Projects

## Database Setup

``` shell
$ mysql -u root 
or 
$ sudo mysql -u root
```

``` mysql
create database socialmediadb;

create user socialuser identified with mysql_native_password by 'socialpass';

grant all privileges on socialmediadb.* to socialuser;
```

## Project Structure

### Backend (Server)
``` shell
src
├── controllers     # functions to connect routes to db operations
├── db              # db connection and mode definition
├── public          # html/js/css files for static part of sites
└── routes          # express middlewares (route wise)
```

### FrontEnd (Client Side Code)

``` shell
src/public/
├── app                                 # our own frontend js code 
│   └── social-common.js
├── components                          # our own html snippets
│   └── navbar.html
├── css                                 # css libraries we are using
│   └── bootstrap.css           
├── fonts                               # fonts that we are using
│   ├── muli.css
│   ├── Muli-Italic.woff2
│   └── Muli.woff2
├── index.html                          # first / home page
└── js                                  # js library we are using
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js

```



## Business Logic

### Users


1. **Create users**
    this will create a new user with random username

### Posts

1. **create posts**

    this will create a new post, required fields are 
    - username (this author of this post)
    - title
    - body

2. **show all posts**
    list all existing posts, we should have following filetering support
    
    - filter by usrname
    - filter by query command in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD`

### Comments
1. **show all comments (of a user)**
2. **show all comments (under a post)**
3. **add a comment**

## API Documentation

### `users`
1. `Post /users`

Creates a new user with random username and an user id

2. `GET /users/{username}`

Get an user with given username

### `posts`
1. `GET /posts/`

Get all posts by everyone

2. `POST /posts`

Create a new post.
Requiredd fields-

```
userId=
title=
body=
```

