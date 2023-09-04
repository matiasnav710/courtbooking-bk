import dotenv from "dotenv";

const envConfig = () => {
    const { NODE_ENV } = process.env;
    dotenv.config({ path: `.env.${NODE_ENV?.trim()}` })
}

export default envConfig;