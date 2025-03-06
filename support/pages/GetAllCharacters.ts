import { Page } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export class GetAllCharacters {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async getCharacterNameAndStatus(characterName, characterStatus): Promise<any> {
        const url = process.env.RICK_AND_MORTY_GRAPHQL_URL;
        if (!url) {
            throw new Error(
                "RICK_AND_MORTY_GRAPHQL_URL is not defined in environment variables."
            );
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Add Content-Type header
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: `query Characters($name: String, $status: String)
                {characters(filter: {name: $name, status: $status}) {
            results {
                id 
                name 
                status 
                species
            location{
                name
            }
            image
            }}}`,
                variables: {
                    name: characterName,
                    status: characterStatus,
                },
            }),
        });
        if (!response.ok){
                        const errorResponse = await response.json()
                        console.log('Error: ', errorResponse)
                }
        const responseBody = await response.json();
        console.log(responseBody.data.characters.results[0]);
        return responseBody.data.characters.results[0];
    }
}
