const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const delivery = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phone = order.phoneNumber;
  const address = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  console.log(
    `Olá ${delivery}, entrega para: ${name}, Telefone: ${phone}, R. ${address}, N: ${number}, AP: ${apartment}`
  );
};
customerInfo(order);

const orderModifier = (order) => {
  const newBuyer = (order.name = 'Luiz Silva');
  const newTotal = (order.payment.total = '50');
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;

  console.log(
    `Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`
  );
};

orderModifier(order);
