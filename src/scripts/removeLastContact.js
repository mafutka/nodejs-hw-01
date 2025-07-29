import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const contacts = await readContacts();

    if (contacts.length === 0) {
        console.log("no contacts in the list");
        return;
        
    }
    const removed = contacts.pop();
    await writeContacts(contacts);
    console.log("LAst contact has been removed", removed);
    

};

removeLastContact();

// У файлі src/scripts/removeLastContact.js опишіть функцію removeLastContact,
//  яка видалятиме останній контакт з масиву, якщо в масиві є хоча б один елемент.



// Перевірити роботу функції можна виконавши команду npm run remove-last,
//  яка буде виконувати код у файлі src/scripts/removeLastContact.js. 
// У файлі src/db/db.json мають відбутися відповідні зміни.
