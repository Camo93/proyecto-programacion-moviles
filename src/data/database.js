    // database.js
    import * as SQLite from 'expo-sqlite';

    const db = SQLite.openDatabase('appdata.db');

    export const init = () =>
    new Promise((res, rej) => {
        db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT NOT NULL,
            lastname TEXT NOT NULL,
            age TEXT NOT NULL,
            email TEXT NOT NULL,
            birthDate TEXT NOT NULL,
            gender TEXT NOT NULL
            );`,
            [],
            () => res(),
            (_, err) => rej(err)
        );
        });
    });

    export const insertUser = (name, lastname, age, email, birthDate, gender) =>
    new Promise((res, rej) => {
        db.transaction(tx => {
        tx.executeSql(
            `INSERT INTO users (name, lastname, age, email, birthDate, gender) VALUES (?, ?, ?, ?, ?, ?);`,
            [name, lastname, age, email, birthDate, gender],
            (_, result) => res(result),
            (_, err) => rej(err)
        );
        });
    });

    export const getAllUsers = () =>
    new Promise((res, rej) => {
        db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM users;',
            [],
            (_, result) => res(result),
            (_, err) => rej(err)
        );
        });
    });