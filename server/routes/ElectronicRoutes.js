let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/ElectronicControllers");


router.get("/api/electronics", list);
router.get("/api/electronics/:id", show);
router.post("/api/electronics", create);
router.put("/api/electronics/:id", update);
router.delete("/api/electronics/:id", remove);

module.exports =  router;