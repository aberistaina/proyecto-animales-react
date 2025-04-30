export const isValidPassword = (password) => {
    const passwordRegex = /^(?=(?:.*[A-Za-z]){4})(?=(?:.*\d){4})(?=(?:.*[@#$+=&]){1})[A-Za-z\d@#$+=&]{9,}$/;
    return passwordRegex.test(password); 
}