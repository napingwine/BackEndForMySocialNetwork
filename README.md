## Install
```
npm install
```

## LOGIN:
```
url = http://localhost:3000/api/auth/login

req:
body = {
  email,
  password
}

res:
{
    "message": "Login success",
    "error": false,
    "code": 200,
    "results": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyNTQ1ZDkwOGE1ZjIzNTQ0Nzk0N2EwIiwibmFtZSI6IkFuZHJpaSIsImVtYWlsIjoicHltb25vdkBtYWlsLmNvbSJ9LCJpYXQiOjE2NTAzMzI1NzcsImV4cCI6MTY1MDMzNjE3N30.z0yg9K9Ys7fcUqvQ4LpnFVpPeo0pNVAcCRJlhFxrtJ0"
    }
}
```

## GET USERS:
```
url = http://localhost:3000/api/users?page=${page}&limit=${limit}

req:



res:
{users: Array(5), totalUsers: 7}



<details><summary>1. req</summary>

let options = {
  headers: {
    "Authorization": `Bearer ${token}`
  }
}
</details>

```