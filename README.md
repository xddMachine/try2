# Fashion Model Website

This project is a simple personal website for a fashion model built with HTML, CSS, and JavaScript. An Express.js backend handles the contact form and serves the static pages. Docker files are included for easy deployment.

## Development

Install dependencies and start the server:

```bash
npm install
npm start
```

The site will be available at `http://localhost:3000`.

## Docker

Build and run with Docker:

```bash
docker build -t fashion-model-site .
docker run -p 3000:3000 fashion-model-site
```

## Contact API

The contact form submits a POST request to `/api/contact`. The current implementation simply logs the request to the console.
