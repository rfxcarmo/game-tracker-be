import { SonyForm, SonyGame } from "../Types/SonyTypes";
import SonyModel from "../Models/SonyModel";
import { getGameInfo } from "../module/Sony/Sony";

export const getSonyWishlist = async (): Promise<SonyGame[]> => {
    return await SonyModel.find();
}

export const updateAllgames = async (): Promise<Object> => {
    const allWishlistGames = await SonyModel.find();
    let countUpdated = 0;

    await Promise.all(allWishlistGames.map(async (game) => {
        if (!game.name || !game.url) return;

        const json = await getGameInfo({ name: game.name, url: game.url });

        const updatedData = {
            ...game.toObject(),
            discountDate: json.discountDate,
            finalPrice: json.finalPrice,
            originalPrice: json.originalPrice,
            name: json.name || `${game.name} (Removed)`
        };

        await SonyModel.findByIdAndUpdate(game._id, updatedData);
        console.log(`${countUpdated} - ${game.name} is updated.`);
        countUpdated++;
    }));

    return { message: "All Games updated!" };
}

export const createOrUpdate = async (form: SonyForm): Promise<Object> => {
    const json = await getGameInfo(form);
    const alreadyExists = await SonyModel.findOneAndUpdate({ name: json.name }, json, { new: true });

    if (alreadyExists) {
        return { ...alreadyExists.toObject(), messageRequest: `${json.name} is updated` };
    }

    const saved = await SonyModel.create(json);
    return { ...saved.toObject(), messageRequest: `${json.name} is saved` };
}

export const deleteGame = async (id: string): Promise<Object> => {
    const deleted = await SonyModel.findByIdAndDelete(id);

    return deleted ? deleted.toObject() : { message: "Game not found" };
}