const ApiError = class extends Error {
    constructor(
        statusCode,
        message="somthing went wrong",
        errors = [],
        statck= ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this. message = message;
        this.data = null
        this.success = false;
        this.errors = this.errors;
        this.stack = stack;


        if (statck) {   
            this.stack = statck;
        }else {
            Error.captureStackTrace(this, this.constructor);
        } 
    }
}


export { ApiError }