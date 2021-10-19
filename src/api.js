let baseURL_API = 'https://api-body-journey-kannbal.qubix.com.mx'
let version_API = '/api/v1/'
let backendConnection = baseURL_API + version_API

export const backend_login = backendConnection + 'oauth/login/'
export const backend_loginWithGoogle = backendConnection + 'oauth/social/'
export const backend_register = backendConnection + 'users/'