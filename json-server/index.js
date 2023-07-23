const fs = require("fs");
const { get } = require("http");
const jsonServer = require("json-server");
const path = require("path");

const getDbData = () => JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"));

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

// Эндпоинт для логина
server.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;
    const db = getDbData();
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: "User not found" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.get("/music", (req, res) => {
  try {
    const { music } = getDbData();

    const sortedMusic = music.sort((a, b) => a.order - b.order);

    return res.json(sortedMusic);
  } catch (error) {
    return res.status(500).json({ message: e.message });
  }
});

server.put("/music/order", (req, res) => {
  try {
    const db = getDbData();

    const orders = req.body;

    const updatedOrderMusic = db.music.map((music) => {
      if (orders[music.id] !== null && orders[music.id] !== undefined) {
        return {
          ...music,
          order: orders[music.id],
        };
      }

      return music;
    });

    db.music = updatedOrderMusic;

    fs.writeFile(path.resolve(__dirname, "db.json"), JSON.stringify(db), (error) => {
      console.log(error);
    });

    return res.json(updatedOrderMusic);
  } catch (error) {
    return res.status(500).json({ message: e?.message || "error" });
  }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
  console.log("server is running on 8000 port");
});
