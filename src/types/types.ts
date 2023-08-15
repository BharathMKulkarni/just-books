export interface Book {
    name: string,
    author: string,
    image?: string,
    price: number 
}

export interface LoginForm {
    emailId: string,
    password: string
}

export interface RegisterForm {
    emailId: string,
    password: string,
    confirmPassword: string
}