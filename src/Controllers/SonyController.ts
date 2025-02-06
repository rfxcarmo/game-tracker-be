import { Router } from "express";
import { asyncHandler } from "../utils/http";
import { 
    getSonyWishlist, 
    updateAllgames, 
    createOrUpdate, 
    deleteGame 
} from "../Services/SonyService";

const SonyController = Router();

SonyController.route("/")
    .get(asyncHandler(async (req: any, res: any) => {
        res.status(200).json(await getSonyWishlist());
    }))
    .patch(asyncHandler(async (req: any, res: any) => {
        res.status(200).json(await updateAllgames());
    }));

SonyController.route("/create-update")
    .post(asyncHandler(async (req: any, res: any) => {
        res.status(200).json(await createOrUpdate({ name: req.body.name, url: req.body.url }));
    }));

SonyController.delete("/:id", asyncHandler(async (req: any, res: any) => {
    const { id } = req.params;
    res.status(200).json(await deleteGame(id));
}));

// SonyController.get("/:id", async (req, res) => {
//     const { id } = req.params;
//     const gameWishlist = await SonyModel.findById(id);

//     res.status(200).json(gameWishlist);
// })

// SonyController.patch("/:id", async (req, res) => {
//     const { id } = req.params;
//     await SonyModel.findByIdAndUpdate(id, req.body);

//     res.status(200).json({ message: "Game updated" });
// })

export default SonyController;