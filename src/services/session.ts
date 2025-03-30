export function storeToken(token: string) {
    localStorage.setItem('jwt', token)
}
export function getToken() {
    return localStorage.getItem('jwt')
}
