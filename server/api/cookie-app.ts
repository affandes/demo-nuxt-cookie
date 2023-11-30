export default defineEventHandler(event => {
    // Read counter cookie
    let identity = getCookie(event, 'identity') || 0
  
    let query = getQuery(event);
    if( query.u === 'admin' && query.p === '1234567' ) {
        // Increase counter cookie by 1
        setCookie(event, 'identity', 'admin')
        setCookie(event, 'token', '9a8sf9as8f79a8sf79a8sf9as8f7a98s7f9a8s7f9a')
    } else {
        // Increase counter cookie by 1
        setCookie(event, 'identity', 'guest')
    }

    
    // Send JSON response
    return { 'status': 'oke', 'message': 'success' }
  })
  