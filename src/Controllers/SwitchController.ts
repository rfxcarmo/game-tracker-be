import { Router } from "express";
import { asyncHandler } from "../utils/http";
import {
    getSwitchWishlist,
    createOrUpdate,
    deleteGame
} from "../Services/SwitchService";

const SwitchController = Router();

SwitchController.route("/")
    .get(asyncHandler(async (req: any, res: any) => {
        res.status(200).json(await getSwitchWishlist());
    }))

SwitchController.route("/create-update")
    .post(asyncHandler(async (req: any, res: any) => {
        res.status(200).json(await createOrUpdate({ name: req.body.name }));
    }));

SwitchController.delete("/:id", asyncHandler(async (req: any, res: any) => {
    const { id } = req.params;
    res.status(200).json(await deleteGame(id));
}));

export default SwitchController;