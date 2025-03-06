import { Page } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export class GetLocations {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async getLocationsIds(locationIDs): Promise<any> {
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
                query: `query Location($locationId: ID!) {
            location(id: $locationId) {
              created
              dimension
              id
              name
              type
            }
          }`,
                variables: {
                    locationId: locationIDs,
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