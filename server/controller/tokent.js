const jwt = require('jsonwebtoken');
const db = require('../connection/db.connection');
require('dotenv').config();

const token = async (req, res) => {
    try {
        const { password, gmail } = req.body;
        console.log('check1',req.body);
        const check = await db.query('SELECT gmail, role FROM dangnhap1 WHERE pass = ? AND gmail = ?', [password, gmail]);
        const check1 = check[0][0].role
        console.log('check11',check1);
        if (check[0].length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        jwt.sign({ gmail }, process.env.JWT_KEY, (err,token) => {
            if (err) {
                console.error('Error generating token:', err);
                return res.status(500).json({ error: 'Failed to generate token' });
            }
            res.json({ token,check1 });
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = token

