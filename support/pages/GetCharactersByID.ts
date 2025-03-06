import { Page } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export class GetCharactersByID {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async getCharacterIds(characterId): Promise<any> {
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
                query: `query CharactersbyIds($ids: [ID!]!)
                {charactersByIds(ids: $ids) {
                id 
                name 
                status 
                species
            location{
                name
            }
            image
            }}`,
                variables: {
                    ids: characterId,
                },
            }),
        });
        if (!response.ok){
                        const errorResponse = await response.json()
                        console.log('Error: ', errorResponse)
                }
        const responseBody = await response.json();
        console.log(responseBody.data.charactersByIds[0]);
        return responseBody.data.charactersByIds[0];
    }
}