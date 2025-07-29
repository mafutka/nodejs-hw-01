import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parsedData = JSON.parse(data);

    for(let i = 0; i < number; i++) {
        const newContact = createFakeContact();
        parsedData.push(newContact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf8');
};

generateContacts(5);


// У файлі src/scripts/generateContacts.js опишіть функцію generateContacts. 
// Вона має за допомогою функції createFakeContact, створювати передану кількість згенерованих контактів,
//  а потім додавати їх до масиву у файлі src/db/db.json і записувати їх назад у файл src/db/db.json.



// Переконайтесь, що ваша функція generateContacts коректно додає нові контакти до вже існуючих. 
// Тобто, якщо масив був порожній, після виклику функції в ньому має бути передана кількість контактів,
//  наприклад 5. Якщо контактів було 3 і у виклик передали 5, то після виклику функції їх має стати 8.



// Перевірити роботу функції можна виконавши команду npm run generate, 
// яка буде виконувати код у файлі src/scripts/generateContacts.js. 
// У файлі src/db/db.json мають відбутися відповідні зміни.

