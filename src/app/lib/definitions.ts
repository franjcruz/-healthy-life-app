export type Fasting = {
    id: string
    user_id: string
    date_start: Date
    date_end: Date
}

export type User = {
    id: string
    name: string
    email: string
    password: string
}