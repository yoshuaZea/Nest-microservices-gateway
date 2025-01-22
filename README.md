## Cliente Gateway

## Dev
1. Clone repository
2. Install dependencies
  ```bash
  npm install
  ```
3. Create a `.env` file based off `.env.template`
4. Run NATS server
```
docker run -d --name nats-main -p 4222:4222 -p 8222:8222 nats
```
5. Run all microservices that will be consumed
6. Run gateway with
```
  npm run start:dev
```

## Nats
```
docker run -d --name nats-main -p 4222:4222 -p 8222:8222 nats
```