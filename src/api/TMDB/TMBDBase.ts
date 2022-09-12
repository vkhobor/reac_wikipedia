import axios, { AxiosRequestConfig } from "axios";
import { GraphQLClient } from "graphql-request";

const graphQlEndpoint = "https://tmdb.sandbox.zoosh.ie/dev/graphql";
export const client = new GraphQLClient(graphQlEndpoint);
