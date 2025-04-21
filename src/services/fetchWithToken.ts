import { getToken } from '../services/session'

const backendUrl = 'http://localhost:4000/api'

export default function fetchWT(
    url: string,
    method: string,
    headers?: { [key: string]: string },
    body?: string) {
    // console.log(getToken())

    return fetch(`${backendUrl}/v1${url}`, {
        method: method,
        headers: {
            'x-authorization': getToken() as string,
            ...headers
        },
        body: body
    })
}
