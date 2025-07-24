import { faker } from "@faker-js/faker";

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

// оголошена функція createFakeContact,
//  яка створює контакт з випадковими даними. 
// Для генерації реалістичних випадкових даних, 
// таких як імена, телефонні номери, емейли тощо 
// використовується бібліотека @faker-js/faker.


// В цій бібліотеці зараз нас будуть цікавити наступні методи:

// id: faker.string.uuid() для генерації унікального ідентифікатора;
// faker.person.fullName() для генерації повних імен;
// faker.phone.number() для створення телефонних номерів;
// faker.internet.email() для формування електронних адрес;
// faker.person.jobTitle() для генерації назв професій.