class CustomError extends Error {
    public message: string;
    public status: number;

    constructor(message: string, status: number) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.message = message || 'Something went wrong. Please try again.';

        this.status = status || 500;
    }
}

export default CustomError;
