const User = require('../models/user-model')

// Home Logic
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("Welcome to YSHostel");

    } catch (error) {
        console.log(error);
    }
}

// Registration Logic
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "Email Already Exist!" });
        }
        const userCreated = await User.create({ username, email, phone, password });
        res
            .status(200)
            .json({ msg: userCreated });

    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
}


module.exports = { home, register }