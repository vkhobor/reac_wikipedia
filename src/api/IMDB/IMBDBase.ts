import { GraphQLClient } from "graphql-request";

const endpoint = "https://tmdb.sandbox.zoosh.ie/dev/graphql";

export const client = new GraphQLClient(endpoint);
