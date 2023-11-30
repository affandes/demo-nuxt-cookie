export default defineNuxtRouteMiddleware((to, from) => {
    
    const identity = useCookie<string>('identity')

    if (identity.value != 'admin') {
      return navigateTo('/login')
    }
  })
  