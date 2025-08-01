import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const readContacts = async () => {
    const data = await readFile(PATH_DB, 'utf8');

    return JSON.parse(data);
};

// У файлі src/utils/readContacts.js опишіть утилітну функцію readContacts.
//  Вона має зчитувати вміст файлу src/db/db.json та повертати його.
//  Функція повинна коректно обробляти дані та забезпечувати
//  правильне зчитування даних з файлу.
