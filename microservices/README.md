# Microservices

## Docker

To create an image
```bash
docker build -t bentilling/<project> .
```

To start the container with port mapping. Note for react-app's there is an open issue that means you have to run with -i
```bash
docker run -p 3000:3000 -it <tagname>
```

To remove all containers
```bash
docker system prune
```

