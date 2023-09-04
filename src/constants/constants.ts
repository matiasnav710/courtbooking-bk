export const isProduction = process.env.NODE_ENV?.trim() === "production";

export enum Routes {
    USER = "/api/users"
}