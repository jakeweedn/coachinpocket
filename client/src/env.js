export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : '' //talks to server 
export const useSockets = false
export const domain = 'pocketcoach.us.auth0.com'
export const clientId = 'V6BYOQv8bjdsPGYdmqkTec3Fsygiq1hO'
export const audience = 'https://pocketcoach.com'

// export const domain = 'codeworksclassroom.auth0.com'
// export const audience = 'https://codeworksclassroom.com'
// export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'


