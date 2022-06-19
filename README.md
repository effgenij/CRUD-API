# CRUD-API

## Install

### Clone repository

If you use ssh

```git clone git@github.com:effgenij/CRUD-API.git```

If you use https

```git clone https://github.com/effgenij/CRUD-API.git```

### Change branch

```git checkout develop```

### Install dependencies

```npm install```

## Usage

### Run app

#### In dev mode

```npm run start:dev```

#### In prod mode

```npm run start:prod```

#### Change port

You can change the port in ```.env``` file

#### Endpoints

GET ```api/user``` - return all users

GET ```api/user/${userId}``` - return user with userID

POST ```api/user/``` - create user

body format for POST request:

```
   {"username": "test",
    "age": 12,
    "hobbies": ["one", "two"]}
```

PUT ```api/user/${userId}``` - update user

DELETE ```api/user/${userId}``` - delete user
