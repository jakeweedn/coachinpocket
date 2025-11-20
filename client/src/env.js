export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : '' //talks to server 
export const useSockets = false
export const domain = 'pocket-coach.us.auth0.com'
export const clientId = 'OkyRymC9JjZvVYn2qarKghWYvpvCBcz7'
export const audience = 'https://pocket-coach.com'

// export const domain = 'codeworksclassroom.auth0.com'
// export const audience = 'https://codeworksclassroom.com'
// export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'


