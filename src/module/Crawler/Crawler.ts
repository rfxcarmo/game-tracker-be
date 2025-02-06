import axios from "axios";
import { load } from "cheerio";

let $: any 

export async function crawler(name:string | null = null, url:string): Promise<void> {
    try {
        const response: { data: string } = await axios.get(url);

        $ = load(response.data);
    } catch (error) {
        console.error(name ?? url + " Error.");
    }
}

export function getDataText(tag : string): string {
    return $(tag).text();
}

export function getSrcImage(tags: string[]): string | undefined {
    if ($(tags[0]).parent().attr()) {
        return $(tags[0]).parent().text().split("src=")[1].replaceAll(`"`, "").replace(" />", "");
    }

    if ($(tags[1]).parent().attr()) {
        return $(tags[1]).parent().text().split("src=")[1].replaceAll(`"`, "").replace(" />", "");
    }
}



// headers: { "User-Agent":"custom-user-agent string" }