import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    await writeContacts([]);
};

removeAllContacts();


// У файлі src/scripts/removeAllContacts.js опишіть функцію removeAllContacts.
//  Вона має видаляти усі контакти з масиву у файлі src/db/db.json.



// Перевірити роботу функції можна виконавши команду npm run remove-all, 
// яка буде виконувати код у файлі src/scripts/removeAllContacts.js. 
// У файлі src/db/db.json мають відбутися відповідні зміни.