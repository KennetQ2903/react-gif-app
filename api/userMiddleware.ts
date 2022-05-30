import { Context } from 'https://deno.land/x/oak@v5.0.0/mod.ts'
import { validateJwt, isExpired, isObject } from '../djwt-0.9.0/validate.ts'
import { users, User } from './users.ts'

const userMiddleware = async (ctx: Context, next: Function) => {
  // Get JWT from request if available
  const { value = {} } = await ctx.request.body()
  let { jwt } = value

  if (!jwt) {
    jwt = ctx.request.headers.get('Authorization')
  }

  console.log('using: ', { jwt })

  if (jwt) {
    // Validate JWT and if it is invalid delete from cookie
    const data: any = await validateJwt(jwt, Deno.env.get('JWT_KEY') || '')
    // console.log(data)
    const exp = data?.payload?.exp || 12002393 // 1970-05-19 15:59:53 expired date
    const iss = data?.payload?.iss || ''

    console.log('valid ', isObject(data))
    console.log('expired ', isExpired(exp))
    if (!isObject(data) || isExpired(exp)) {
      ctx.cookies.delete('jwt')
      ctx.response.status = 401
    } else if (data) {
      // If it is valid select user and save in context state
      const user: any = users.find((u: User) => u.username === iss)
      ctx.state.currentUser = user
      console.log('found', { user })
      await next()
    } else {
      ctx.cookies.delete('jwt')
      await next()
    }
  } else {
    ctx.state.currentUser = null
    await next()
  }
}

export { userMiddleware }
