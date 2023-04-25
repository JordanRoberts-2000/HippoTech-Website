export const usernameValidation = (username: string) => {
    const spaceCheck = username.match(/\s/)
    if(spaceCheck)return {valid: false, error: 'Cannot use spaces'}
    const valid = username.match(/^\d*[a-zA-Z][a-zA-Z\d]*$/)
    if(!valid)return {valid: false, error: 'Only letters and numbers are valid'}
    if(username.length < 6)return {valid: false, error: 'Username is too short'}
    return {valid: true, error: ''}
}

export const emailValidation = (email:string) => {
    const valid = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    if(valid)return {valid: true, error: ''}
    return {valid: false, error: 'Email is invalid'}
}

export const nameValidation = (name: string) => {
    const spaceCheck = name.match(/\s/)
    if(spaceCheck)return {valid: false, error: 'Cannot use spaces'}
    const valid = name.match(/^[a-zA-Z]+$/)
    if(!valid)return {valid: false, error: 'Only letters are valid'}
    if(name.length < 3)return {valid: false, error: 'Name is too short'}
    return {valid: true, error: ''}
}

export const passwordValidation = (password: string) => {
    const capitalFound = password.match(/[A-Z]/)
    if(!capitalFound)return {valid: false, error: 'Needs atleast one capital letter'}
    const numberFound = password.match(/\d/)
    if(!numberFound)return {valid: false, error: 'Needs atleast one number'}
    const specialFound = password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)
    if(!specialFound)return {valid: false, error: 'Needs atleast one special character'}
    if(password.length < 8)return {valid: false, error: 'Password is too short'}
    return {valid: true, error: ''}
}