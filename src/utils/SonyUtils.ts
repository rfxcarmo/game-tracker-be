import { getDateInString } from "./DateUtils";
import { SonyGame } from "../Types/SonyTypes";
import { getDataText, getSrcImage } from "../module/Crawler/Crawler";
import { SonyForm } from "../Types/SonyTypes";

const name = "mfe-game-title#name";
const img = ["gameBackgroundImage#heroImage", "gameBackgroundImage#tileImage"];
const finalPrice = "mfeCtaMain#offer0#finalPrice";
const originalPrice = "mfeCtaMain#offer0#originalPrice";
const discountDate = "mfeCtaMain#offer0#discountDescriptor";
const tags = ["mfe-game-title#productTag0", "mfe-game-title#productTag1", "mfe-game-title#productTag2"];
const releaseDate = "mfe-game-title#release-date"

const game: SonyGame = {
    name: null,
    img: null,
    url: null,
    finalPrice: null,
    originalPrice: null,
    discountDate: null,
    priority: null,
    tags: null,
    releaseDate: null
};

export function getJsonGame(form: SonyForm): SonyGame {
    return {
        ...game,
        url: form.url ?? null,
        priority: form.priority ?? null,
        name: getData(name) || null,
        img: getSrc(img) || null,
        originalPrice: getData(originalPrice) || null,
        finalPrice: getData(finalPrice) || null,
        discountDate: getData(discountDate) ? getDateInString(getData(discountDate)) : null,
        releaseDate: getData(releaseDate) || null,
        tags: getTags()
    };
}

function dataQa(tag: string) {
    return `[data-qa=${tag}]`;
}

function getData(tag: string) {
    return getDataText(dataQa(tag));
}

function getSrc(tags: string[]) {
    return getSrcImage([dataQa(tags[0]), dataQa(tags[1])]);
}

function getTags() {
    let arrayTags = [];

    for (let tag of tags as string[]) {
        if (getData(tag)) {
            arrayTags.push(getData(tag));
        }
    }

    return arrayTags;
}
