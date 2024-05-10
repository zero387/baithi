const db = require('../connection/db.connection');

const Register = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("req.boy",req.body);
        await db.query(`INSERT INTO dangnhap1 (gmail, pass, role) VALUES ('${email}', '${password}', 'user')`);
        res.status(200).json({ success: true, message: "Đăng ký thành công" });
    } catch (error) {
        console.error('Lỗi:', error);
        res.status(500).json({ success: false, message: "Đã xảy ra lỗi khi đăng ký" });
    }
}

module.exports = Register;
