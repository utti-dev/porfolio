export default function middleware(req) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  // Only protect preview deployments, allow production
  if (process.env.VERCEL_ENV === 'production') {
    return
  }

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === process.env.AUTH_USER && pwd === process.env.AUTH_PASSWORD) {
      return
    }
  }

  url.pathname = '/api/auth'

  return Response.redirect(url)
}