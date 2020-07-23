# Blog Project

An intro to microservices by creating a simple blog application.

## Tutorial Steps

1. Create a react app called client
2. Create two node projects posts and comments with express, cors, axios and nodemon
3. Create Express app listening on port 4000 with get and post methods for '/posts'
4. Implement these methods
  - Use `randomBytes(4).toString('hex')` from crypto to generate an id for a user
  - Store title from body in posts object
  - Return posts[id] from post and posts from get
5. Repeat with comments with endpoint '/posts/:id/comments' returning an array of comments for a post id

