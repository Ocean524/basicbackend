require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "sandiptamang",
  "id": 53549419,
  "node_id": "MDQ6VXNlcjUzNTQ5NDE5",
  "avatar_url": "https://avatars.githubusercontent.com/u/53549419?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sandiptamang",
  "html_url": "https://github.com/sandiptamang",
  "followers_url": "https://api.github.com/users/sandiptamang/followers",
  "following_url": "https://api.github.com/users/sandiptamang/following{/other_user}",
  "gists_url": "https://api.github.com/users/sandiptamang/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sandiptamang/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sandiptamang/subscriptions",
  "organizations_url": "https://api.github.com/users/sandiptamang/orgs",
  "repos_url": "https://api.github.com/users/sandiptamang/repos",
  "events_url": "https://api.github.com/users/sandiptamang/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sandiptamang/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2019-08-01T03:29:14Z",
  "updated_at": "2022-05-11T09:19:13Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req, res) => {
    res.send('sun_tamoong')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur code</h2>")

})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
