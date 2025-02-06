import { getJsonGame } from '../../utils/SonyUtils'
import { crawler } from '../Crawler/Crawler'
import { SonyForm, SonyGame } from '../../Types/SonyTypes'

export async function getGameInfo(form: SonyForm): Promise<SonyGame> {
    if (form.url) {
        await crawler(form.name, form.url);
    } else {
        throw new Error("Form name or URL is undefined");
    }

    return getJsonGame({ url: form.url, priority: form.priority });
}