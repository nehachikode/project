const router = express.Router();
const userController = require("../controllers/user");
const auth = require('../middlewares/auth');
const acl = require('../middlewares/acl');
const validate = require("../validator/user");

router
    .get("/login", auth, acl, userController.login.get)
    .get("/register", auth, acl, userController.register.get)

router
    .post("/login", auth, acl, userController.login.post)
    .post("/register", auth, acl, userController.register.post)


module.exports = router;