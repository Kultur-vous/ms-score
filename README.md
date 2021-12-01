# Micro-service score

DANVERS Martin & GAUTRON Marie

## Url deployed

https://boo-score.herokuapp.com/

## Install dependencies

`yarn`

## You might need

Node 14+ : `nvm use 14`

Error : `[nodemon] failed to start process, "ts-node" exec not found`

Solution : Install ts-node `npm install -g ts-node`

## Run local

`yarn dev`

Add `.env` :

```
PORT=3002
MONGO_USERNAME=admin
MONGO_PASS=7szPPLTsFXd3Yxs
MONGO_DB=scores
```

## Endpoints


### Add Score

`POST /addScore`

Body :

```
{
    value: "",
    nbQuestion: "",
    category: "",
    difficulty: ""
}
```

Header :

```
{
    email: "",
    id: ""
}
```

Authorization :

```
{
    authorized: Bearer *token*,
}
```

### Scores

`GET /scores` 

Header :

```
{
    email: "",
    id: ""
}
```

Authorization :

```
{
    authorized: Bearer *token*,
}