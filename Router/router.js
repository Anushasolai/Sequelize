const  controller=require('../controller/controller') ;
const {Router}=require ('express');

const route = Router();

route.post("/add",controller.stuinsert);
route.get("/",controller.stuview);
route.get("/:id",controller.stusearch);
route.put("/update/:id",controller.stuupdate);
route.delete("/delete/:id",controller.studel);

module.exports=route;