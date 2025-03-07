const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(morgan("dev")); // Логирует все запросы
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("🚀 JSON Server запущен на http://localhost:3000");
});