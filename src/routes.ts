import { Router } from "express"
import SonyController from "./Controllers/SonyController"
import SwitchController from "./Controllers/SwitchController"
 
const routes: Router = Router()

routes.get('/test', (req, res) => {
    res.status(200).json({ message: "test teste" })
})

routes.use("/game-wishlist/sony", SonyController);
routes.use("/game-wishlist/switch", SwitchController);
//routes.use("/psn-api", PsnApiController);

export default routes;