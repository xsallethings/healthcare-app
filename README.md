# Healthcare Webapp

This is a client web application to interact with a given server and retrieve data from its REST API.

## Prerequisites

You will need **node.js**. You will also need to install the dependencies:

```
npm i
```

The backend running on `localhost:3000` is also required.

## Usage

To run the web application, simply run:

```
node index.js
```

This script will run two services:

- **CORS proxy:** a required server running by default on `localhost:8080` to fix cross-origin errors.
- **Web app:** the actual webapp, running on `localhost:9090`.
