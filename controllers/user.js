const userModel = require("../models/user");

module.exports = {
    login: {
        get: async (req, res) => {
            let userId = req.query.user_id;
            let user;
            try {
                user = await userModel.getUser(con, userId);
            } catch (error) {
                res.status(500).send({ message: "Something went wrong" });
            }
            
            res.render("user/login", user);
        },
        post: (req, res) => {
    
        }
    },
    register: {
        get: (req, res) => {

        },
        post: (req, res) => {
    
        }
    }
};