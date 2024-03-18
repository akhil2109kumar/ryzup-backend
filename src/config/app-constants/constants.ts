export type httpCodeWithMessageType = {
    OK: [number, string]
    created: [number, string]
    notFound: [number, string]
    badRequest: [number, string]
    forbidden: [number, string]
    internalServer: [number, string]
}

export const appConstants = {
    httpCodeWithMessage: {
        OK: [200, "OK Success"],
        created: [201, "Created"],
        notFound: [404, "Not found"],
        badRequest: [400, "Bad Request"],
        forbidden: [403, "Not Authenticate"],
        internalServer: [500, "Internal server error"],
    } as httpCodeWithMessageType,
}

