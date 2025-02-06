import { SwitchForm, SwitchGame } from "../Types/SwitchTypes";
import SwitchModel from "../Models/SwitchModel";

export const getSwitchWishlist = async (): Promise<SwitchGame[]> => {
    return await SwitchModel.find();
}

export const createOrUpdate = async (form: SwitchForm): Promise<Object> => {
    const alreadyExists = await SwitchModel.findOneAndUpdate({ name: form.name }, form, { new: true });

    if (alreadyExists) {
        return { messageRequest: `${form.name} already exists.` };
    }

    const saved = await SwitchModel.create(form);
    return { ...saved.toObject(), messageRequest: `${form.name} is saved` };
}

export const deleteGame = async (id: string): Promise<Object> => {
    const deleted = await SwitchModel.findByIdAndDelete(id);

    return deleted ? deleted.toObject() : { message: "Game not found" };
}