const User = require('../models/user-model')
const bcrypt = require("bcryptjs");

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

        // Hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password });
        res
            .status(200)
            .json({
                msg: "Registration Successfull",
                token: await userCreated.generateToken(), userId: userCreated._id.toString()
            });

    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
}

// User Login logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            res.status(400).json({ message: "Invalid credential" });
        }
        const user = await userExist.comparePassword(password);

        if (user) {
            res
                .status(200)
                .json({
                    msg: "Login Successfull",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString()
                });
        } else {
            res.status(401).json({ message: "Invalid email and password" });
        }


    } catch (error) {
        res.status(500).json("Internal server error!")
    }

}

module.exports = { home, register, login }