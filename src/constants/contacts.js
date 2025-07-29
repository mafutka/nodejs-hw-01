import path from 'node:path';

export const PATH_DB = path.join(process.cwd(),'src', 'db', 'db.json');



console.log("path-to-file", PATH_DB);




// У файлі src/constants/contacts.js є оголошена константа PATH_DB. 
// Ініціалізуйте її значенням, яке буде зберігати
// шлях до файлу src/db/db.json.

// 'src', 'db', 'db.json'

