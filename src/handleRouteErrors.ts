import { RequestHandler } from "express";

type RouteErrorHandler = (callback: RequestHandler) => RequestHandler;

const handleRouteErrors: RouteErrorHandler = (callback: RequestHandler) => {
    return async (req, res, next) => {
        try {
            await callback(req, res, next);
        } catch (error: any) {
            if(error?.errors?.length) return res.status(400).send({ message: error.errors[0] });
            res.status(500).send("Internal Server Error");
            console.error(error);
        }
    }
}

export default handleRouteErrors;