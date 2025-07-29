import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    const json = JSON.stringify(updatedContacts, null, 2);
    await writeFile(PATH_DB, json, 'utf8');
};

// У файлі src/utils/writeContacts.js опишіть утилітну функцію writeContacts. 
// Вона має записувати дані у файл src/db/db.json.
//  Функція повинна коректно приймати дані як параметр та забезпечувати правильний запис даних у файл.



// Використовуйте ці утилітні функції в подальших кроках.


