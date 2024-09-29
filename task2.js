// 1. Map для блюд и поваров
const dishToChef = new Map();

// Добавляем блюда и поваров, которые их готовят
dishToChef.set("Пицца 'Маргарита'", "Виктор");
dishToChef.set("Пицца 'Пепперони'", "Виктор");
dishToChef.set("Суши 'Филадельфия'", "Ольга");
dishToChef.set("Суши 'Калифорния'", "Ольга");
dishToChef.set("Тирамису", "Дмитрий");
dishToChef.set("Чизкейк", "Дмитрий");

// 2. Map для заказов клиентов
const clientOrders = new Map();

// Функция для добавления заказа клиента
function addOrder(client, dish) {
  if (!clientOrders.has(client)) {
    clientOrders.set(client, []); // Создаем запись для нового клиента
  }
  
  clientOrders.get(client).push(dish); // Добавляем заказанное блюдо
}

// 3. Создаем клиентов (ключи в Map)
const clientAlexey = { name: "Клиент: Алексей" };
const clientMaria = { name: "Клиент: Мария" };
const clientIrina = { name: "Клиент: Ирина" };

// Добавляем заказы клиентов
addOrder(clientAlexey, "Пицца 'Пепперони'");
addOrder(clientAlexey, "Тирамису");

addOrder(clientMaria, "Суши 'Калифорния'");
addOrder(clientMaria, "Пицца 'Маргарита'");

addOrder(clientIrina, "Чизкейк");

// 4. Функция для получения повара, который готовит блюдо
function getChefForDish(dish) {
  return dishToChef.get(dish);
}

// 5. Выводим заказы клиентов и поваров, которые будут готовить их блюда
for (const [client, orders] of clientOrders.entries()) {
  console.log(`${client.name} заказал:`);
  for (const dish of orders) {
    const chef = getChefForDish(dish);
    console.log(`- ${dish} (готовит ${chef})`);
  }
  console.log(""); // Для разделения информации о клиентах
}
