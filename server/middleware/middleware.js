const jwt = require('jsonwebtoken');
const db = require('../connection/db.connection');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization'];
        if (!authorizationHeader) {
            return res.status(401).json({ error: 'Authorization header missing' });
        }

        const token = authorizationHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const { gmail } = decoded;

        const user = await db.query('SELECT * FROM dangnhap1 WHERE gmail = ?', [gmail]);
        
        if (user.length === 0) {
            return res.status(401).json({ error: 'User not found' });
        }
   
        req.user = user[0];
        
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ error: 'Authentication failed' });
    }
};

module.exports = authMiddleware;

