# Portfolio

Vite + React portfolio site with a production Docker build.

## Local Development

```bash
npm install
npm run dev
```

The local Vite server uses `VITE_BASE_PATH` from `.env.local`, which is currently set for `/portfolio12`.

## Production Build

```bash
npm run build
npm run preview
```

## Docker Hosting

Build and run with Docker:

```bash
docker build -t anjana-portfolio .
docker run --rm -p 8080:80 anjana-portfolio
```

Open:

```text
http://localhost:8080
```

Run with Docker Compose:

```bash
docker compose up --build
```

## Custom Base Path

For normal Docker hosting, keep the base path as `/`.

If you need to host under `/portfolio12`, build with:

```bash
docker build --build-arg VITE_BASE_PATH=/portfolio12 -t anjana-portfolio .
```

Then the site should be served from:

```text
http://localhost:8080/portfolio12/
```
