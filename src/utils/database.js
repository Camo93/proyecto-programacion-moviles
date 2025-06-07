    import * as SQLite from 'expo-sqlite';

    // Abrimos o creamos la base de datos
    const db = SQLite.openDatabase('usuarios.db');

    // Crear la tabla si no existe
    export const crearTabla = () => {
    db.transaction((tx) => {
        tx.executeSql(
        `CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            correo TEXT,
            anioNacimiento INTEGER,
            genero TEXT
        );`,
        [],
        () => console.log('✅ Tabla creada o ya existe'),
        (_, error) => {
            console.error('❌ Error creando la tabla:', error);
            return true;
        }
        );
    });
    };

    // Insertar un nuevo usuario
    export const insertarUsuario = (nombre, correo, anioNacimiento, genero) => {
    db.transaction((tx) => {
        tx.executeSql(
        `INSERT INTO usuarios (nombre, correo, anioNacimiento, genero) VALUES (?, ?, ?, ?)`,
        [nombre, correo, anioNacimiento, genero],
        (_, result) => {
            console.log('✅ Usuario insertado con ID:', result.insertId);
        },
        (_, error) => {
            console.error('❌ Error al insertar usuario:', error);
            return true;
        }
        );
    });
    };

    export default db;
