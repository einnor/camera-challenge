"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Api {
    static internalError(request, response, responseData) {
        response = response.status(500);
        console.error('500 Status at: ', new Date(), `\n`, responseData || 'no error data');
        if (process.env.NODE_ENV === 'production') {
            responseData = 'Internal Server Error';
        }
        if (typeof responseData === 'string') {
            return response.json({
                error: responseData,
            });
        }
        if (typeof responseData === 'object') {
            const messageOrError = responseData['message'] || responseData['error'];
            if (messageOrError) {
                return response.json({
                    error: messageOrError,
                });
            }
        }
        return response.json(responseData);
    }
    static badRequest(request, response, responseData) {
        response.statusCode = 400;
        console.error(`400 Status:\n${responseData || 'no error data'}`);
        if (typeof responseData === 'string') {
            return response.json({
                error: responseData,
            });
        }
        else {
            return response.json(responseData);
        }
    }
    static handleUncaughtException(error, request, response, next) {
        const errorMessage = error.toString();
        return Api.internalError(request, response, errorMessage);
    }
}
exports.default = Api;
//# sourceMappingURL=Api.js.map