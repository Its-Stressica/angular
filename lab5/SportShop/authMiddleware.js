const jwt = require("jsonwebtoken");
// Імпорт модуля jsonwebtoken для роботи з JWT (JSON Web Tokens).
const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";
// Константи для секретного ключа (APP_SECRET) і облікових даних користувача (USERNAME та PASSWORD).
// У реальному проєкті ці значення краще зберігати у змінних середовища (process.env) для безпеки.

const mappings = {
  get: ["/api/orders", "/orders"],
  post: ["/api/products", "/products", "/api/categories", "/categories"],
};
// Об'єкт mappings визначає, які маршрути потребують авторизації, залежно від HTTP-методу (GET або POST).

function requiresAuth(method, url) {
  return (
    (mappings[method.toLowerCase()] || []).find((p) => url.startsWith(p)) !==
    undefined
  );
}
// Функція `requiresAuth` перевіряє, чи потрібна авторизація для певного методу та маршруту.
// Використовується метод `.find` для пошуку маршрутів, які починаються з певного префікса.

module.exports = function (req, res, next) {
  if (req.url.endsWith("/login") && req.method == "POST") {
    // Якщо запит спрямований на `/login` із методом POST, обробляється логіка авторизації.
    if (
      req.body &&
      req.body.name == USERNAME &&
      req.body.password == PASSWORD
    ) {
      // Перевіряється, чи тіло запиту (req.body) містить правильні ім'я користувача та пароль.
      let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
      // Якщо облікові дані коректні, генерується токен за допомогою секретного ключа (APP_SECRET)
      // з терміном дії 1 година (1h).
      res.json({ success: true, token: token });
      // Відповідь з токеном у разі успішного входу.
    } else {
      res.json({ success: false });
      // Відповідь у разі невдалої спроби входу.
    }
    res.end();
    return;

    // Завершення обробки запиту після обробки `/login`.
  } else if (requiresAuth(req.method, req.url)) {
    // Отримання токена з заголовка `Authorization`. Якщо заголовок відсутній, токен дорівнює порожньому рядку.
    let token = req.headers["authorization"] || "";
    if (token.startsWith("Bearer<")) {
      // Перевіряється, чи токен починається з `Bearer<`.
      token = token.substring(7, token.length - 1);
      // Обрізається частина `Bearer<` і останній символ. Це реалізовано некоректно, адже стандартний формат — `Bearer <токен>`.

      try {
        jwt.verify(token, APP_SECRET);
        // Токен перевіряється за допомогою `jwt.verify` та секретного ключа (APP_SECRET).
        next();
        return;
        // Якщо токен валідний, викликається `next()`, щоб перейти до наступного middleware.
      } catch (err) {
        // У разі помилки токен вважається недійсним.
      }
    }
    res.statusCode = 401;
    // Якщо токен відсутній або недійсний, повертається статус 401 (Unauthorized).
    res.end();
    return;
  }
  next();
  // Якщо авторизація не потрібна, або токен пройшов перевірку, обробка передається далі.
};
