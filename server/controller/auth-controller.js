// In an express .js application a "Controller"refers to a part of your code that is responsible for handing the application logic controllers are typically used to process incoming client requests, interact with models (data sources), and send back to clients. They help organizes your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

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
        console.log(req.body);
        res
            .status(200)
            .json({ message: req.body });

    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
}

module.exports = { home, register }