const express = require("express");
const crypto = require("crypto");
const path = require("path"); // Импорт модуля path
const app = express();

app.use((req, res, next) => {
  // Генерация nonce
  res.locals.nonce = crypto.randomBytes(16).toString("base64");

  // Установка CSP заголовка
  res.setHeader(
    "Content-Security-Policy",
    `script-src 'self' 'nonce-${res.locals.nonce}';`
  );

  next();
});

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(5000, () => {
  console.log("Server is running on port 000");
});
