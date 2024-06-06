import axios from "axios";

export const api = axios.create({
    baseURL: `https://brightocean-prod.azuremicroservices.io/api`,
});