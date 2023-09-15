export const add_user = (username, password, auth) => {
    return {
        type: "AUTH_USER",
        payload: {username, password, auth}
    }
}