## Install
```
npm install
```
```
hostURL = `http://localhost:3000/api`
```
## LOGIN:
method: POST;
```
url = `${hostURL}/auth/login`
```
<details><summary>request</summary>
  body = {
    email,
    password
  }
</details>

<details><summary>resolve</summary>
{
    "message": "Login success",
    "error": false,
    "code": 200,
    "results": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyNTQ1ZDkwOGE1ZjIzNTQ0Nzk0N2EwIiwibmFtZSI6IkFuZHJpaSIsImVtYWlsIjoicHltb25vdkBtYWlsLmNvbSJ9LCJpYXQiOjE2NTAzMzI1NzcsImV4cCI6MTY1MDMzNjE3N30.z0yg9K9Ys7fcUqvQ4LpnFVpPeo0pNVAcCRJlhFxrtJ0"
    }
}
</details>

## REGISTER USER:
method: POST;
```
  let register_URL = `${hostURL}/auth/register`;
```
<details><summary>request</summary>
  let body = {
    "name": name,
    "email": email,
    "password": password,
    "surname": surname
  };
</details>

<details><summary>resolve</summary>
{
    "message": "Register success, please activate your account.",
    "error": false,
    "code": 201,
    "results": {
        "user": {
            "id": "625e1c40a7315770f86e6f54",
            "name": "Vasja6",
            "email": "vasiliev6@mail.com",
            "verified": false,
            "createdAt": "2022-04-19T01:46:31.865Z"
        },
        "verification": {
            "_id": "625e1c40a7315770f86e6f55",
            "token": "jivO7UGcjUzgYjqqmR85bhrXiiKVhZyQIYpZVrP7z5M2StexVY",
            "userId": "625e1c40a7315770f86e6f54",
            "type": "Register New Account",
            "createdAt": "2022-04-19T02:19:44.550Z",
            "__v": 0
        }
    }
}
</details>

## GET USERS:
method: GET;
```
url = `${hostURL}/users?page=${page}&limit=${limit}`
```
<details><summary>request</summary>
  let options = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
</details>

<details><summary>resolve</summary>
{
    "users": [
        {
            "location": {
                "country": "N/A",
                "city": "N/A"
            },
            "photo": {
                "avatars": [
                    {
                        "ref": "Photos"
                    }
                ],
                "small": "please download your photo",
                "large": "please download your photo"
            },
            "verified": true,
            "createdAt": "2022-03-06T23:25:46.053Z",
            "status": "please fill up status",
            "followedUsersByMe": [],
            "followers": [],
            "followed": false,
            "myTasks": [],
            "_id": "622545d908a5f235447947a0",
            "followedUsersByOtherUser": [],
            "name": "Andrii",
            "email": "pymonov@mail.com",
            "password": "$2a$10$MtV5r4OsqWNhDW2Mtzu4GumnN1SmSVoOh4dxg6tVF13cj7FhD9pL2",
            "__v": 0,
            "verifiedAt": "2022-03-06T23:38:02.317Z"
        },
        {
            "location": {
                "country": "N/A",
                "city": "N/A"
            },
            "photo": {
                "avatars": [
                    {
                        "ref": "Photos"
                    }
                ],
                "small": "please download your photo",
                "large": "please download your photo"
            },
            "verified": true,
            "createdAt": "2022-03-18T02:20:46.701Z",
            "status": "please fill up status",
            "followedUsersByMe": [],
            "followers": [],
            "followed": false,
            "myTasks": [],
            "_id": "6233ec8293f1832660d99bf2",
            "followedUsersByOtherUser": [],
            "name": "Vasja",
            "email": "vasiliev@mail.com",
            "password": "$2a$10$ik8XGaCo69etUjnQEgInE.afy7vyPScph0vcjNnkCv6T8RtehxxUS",
            "__v": 0,
            "verifiedAt": "2022-03-18T02:20:51.986Z"
        },
        {
            "location": {
                "country": "N/A",
                "city": "N/A"
            },
            "photo": {
                "avatars": [
                    {
                        "ref": "Photos"
                    }
                ],
                "small": "please download your photo",
                "large": "please download your photo"
            },
            "verified": true,
            "createdAt": "2022-03-18T02:20:46.701Z",
            "status": "please fill up status",
            "followedUsersByMe": [],
            "followers": [],
            "followed": false,
            "myTasks": [],
            "_id": "6235190793f1832660d99bf4",
            "followedUsersByOtherUser": [],
            "name": "Vasja1",
            "email": "vasiliev1@mail.com",
            "password": "$2a$10$x94ZhGZv86.ZG5Gh42MxvO3cnt6oFFGQmEaN1n/ENO6g1i2iIu56a",
            "__v": 0,
            "verifiedAt": "2022-03-18T23:43:04.567Z"
        },
        {
            "location": {
                "country": "N/A",
                "city": "N/A"
            },
            "photo": {
                "avatars": [
                    {
                        "ref": "Photos"
                    }
                ],
                "small": "please download your photo",
                "large": "please download your photo"
            },
            "verified": true,
            "createdAt": "2022-03-18T02:20:46.701Z",
            "status": "please fill up status",
            "followedUsersByMe": [],
            "followers": [],
            "followed": false,
            "myTasks": [],
            "_id": "6235191f93f1832660d99bf6",
            "followedUsersByOtherUser": [],
            "name": "Vasja2",
            "email": "vasiliev2@mail.com",
            "password": "$2a$10$Wps.z.m24QPSfU4LEk.m3uybwXiLEYbX./9Mg4hrtVH1k8Y6lWWs2",
            "__v": 0,
            "verifiedAt": "2022-03-18T23:43:28.093Z"
        },
        {
            "location": {
                "country": "N/A",
                "city": "N/A"
            },
            "photo": {
                "avatars": [
                    {
                        "ref": "Photos"
                    }
                ],
                "small": "please download your photo",
                "large": "please download your photo"
            },
            "verified": true,
            "createdAt": "2022-03-18T02:20:46.701Z",
            "status": "please fill up status",
            "followedUsersByMe": [],
            "followers": [],
            "followed": false,
            "myTasks": [],
            "_id": "6235192893f1832660d99bf8",
            "followedUsersByOtherUser": [],
            "name": "Vasja3",
            "email": "vasiliev3@mail.com",
            "password": "$2a$10$jQqc3XtlWYAnRXLcL9xhm.vWoIpF6JVgOxk9q9rnoZS9P5OyhSIVG",
            "__v": 0,
            "verifiedAt": "2022-03-18T23:43:37.848Z"
        }
    ],
    "totalUsers": 7
}
</details>

## VERIFICATION USER:
method: GET;
```
  let verification_URL = `${hostURL}/auth/verify/` + token
```

<details><summary>resolve</summary>
{
    "message": "Your successfully verificating your account",
    "error": false,
    "code": 200,
    "results": null
}
<details>

## GET USER BY ID:
method: GET;
```
  URL = '${hostURL}/users/profile/${_id}`;
```
<details><summary>resolve</summary>
  TO BE CHECKED 
<details>

## GET MY TASKS:
method: GET;
```
  URL = '${hostURL}/users/profile/${_id}`;
```
<details><summary>request</summary>
  let options = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
<details>
<details><summary>resolve</summary>
  TO BE CHECKED
<details>