export const isProduction = process.env.NODE_ENV?.trim() === "production";

export enum Routes {
    USER = "/api/users",
    COURT = "/api/courts",
    VENUE = "/api/venues",
    BOOKING = "/api/bookings",
    SPORTS = "/api/sports"
}