declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            URL: string;
        }
    }
}

export {};
