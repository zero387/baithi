const db = require("../connection/db.connection")

async function getAll() {
    try {
        const allData = await db.query("select * from dangnhap1")
        console.log("data",allData[0]);
        return allData[0]
    } catch (error) {
        console.log("getall error",error)
        throw error
    }
}
async function deleteData(id) {
    try {
        const result = await db.query('DELETE FROM dangnhap1 WHERE id = ?', [id]);
        return result;
    } catch (error) {
        console.error('Error deleting data from database:', error);
        throw error;
    }
}


module.exports = {
    getAll,
    deleteData
}