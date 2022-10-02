# ip-api

A simple, Dockerized HTTP server that clients can use to find their own IP.

Useful for testing and development, but not for production.

## Usage

Run the docker container, and send HTTP requests to `/`.

The following example runs the container in the background, makes a single request, and
shuts the container down.

```
> docker run -p 8080:8080 -d --name ip-api ghcr.io/drifting-in-space/ip-api:latest
96be59ee5bb89101c2d087c2b24f0d403de0e87e396c4c759a4e7c7ee8223a88

> curl localhost:8080
172.17.0.1

> docker stop ip-api
ip-api
```
