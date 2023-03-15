"use strict";

function getProductsList() {
  return JSON.parse(json).goods;
}

function getProductsObject() {
  return JSON.parse(json).goods.reduce((acc, product) => {
    return { ...acc, [product.id]: product };
  }, {});
}

const json = `{
  "goods": [
    {
      "id": "04a57766-c599-4366-8dc4-89ff1ccd3b14",
      "name": "Куртка Vai-Vai",
      "description": "Куртка просто куртка,офигенно дорогая",
      "price": 49998,
      "img": "images/featured/1.jpg"
    },
    {
      "id": "61977551-efb2-4f6a-a6ea-da9c3b24798c",
      "name": "Пиджак 007",
      "description": "Для женского Блонда",
      "price": 26500,
      "img": "images/featured/2.jpg"
    },
    {
      "id": "5bf21210-6463-49ae-a8c4-4a9ff10002bf",
      "name": "Худи",
      "description": "Худи так дорого",
      "price": 16700,
      "img": "images/featured/3.jpg"
    },
    {
      "id": "4886ba5c-97d2-4ae4-bcff-b18a86e5cf37",
      "name": "Желтые Брюки Mokki",
      "description": "Желтые Брюки Бананы",
      "price": 5500,
      "img": "images/featured/4.jpg"
    },
    {
      "id": "27bca31f-aac1-4f91-a309-c262046a3d23",
      "name": "Пиджак Im blu,da budi,da budai",
      "description": "Вспомни песенку про голубую жизнь",
      "price": 15555,
      "img": "images/featured/5.jpg"
    },
    {
      "id": "f92016c2-5b27-441d-b2e7-b716e2ad63ea",
      "name": "Рубашка в полоску",
      "description": "Купи рубашку.пусть жизнь будет как зебра",
      "price": 1900,
      "img": "images/featured/6.jpg"
    }
  ]
}`;
