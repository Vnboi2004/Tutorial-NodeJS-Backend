const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from USERS');
    return results;
};

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from USERS where Id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
};

const updateUserById = async (id, email, fullName, city) => {
    let [results, fields] = await connection.query(
        `
        UPDATE USERS
        SET Email = ?, Name = ?, City = ?
        WHERE Id = ?
        `, [email, fullName, city, id]
    );
};

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        `
        DELETE FROM USERS
        WHERE Id = ?
        `, [id]
    );
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};