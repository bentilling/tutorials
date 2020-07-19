# Node and Related Topics

Node API playlist https://tinyurl.com/y6gzmpts 

## RESTful API

What makes an api REpresentiational State Transfer?

1. Separation of concers, the api should not care about the ui
2. Stateless, no client context should be stored on server
3. Responses must define themselves as cacheable or not
4. Layered System, We don't give the guarantee that our api is the 'final request'
5. Uniform Interface
    - Individual resources, e.g. users, are identified in the request
    - Transferred data is decoupled from the db schema, e.g. don't need to send back same format
    - Links to further resources, e.g. a get to users could contain links to individual user within response
6. (Optional) Executable code can be transferred

## General 

- Node doesn't support newer import syntax, insteadd use `const http = require('http');`
- You can access node environemt variables with `process.env.XXXX`.
