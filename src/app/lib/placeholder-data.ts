const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@test.com',
        password: '123456',
    },
]

const fastings = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        date_start: '2022-01-01T00:00:00Z',
        date_end: '2022-01-01T18:59:59Z',
    },
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442b',
        user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        date_start: '2022-01-02T00:00:00Z',
        date_end: '2022-01-02T19:59:59Z',
    },
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442c',
        user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        date_start: '2022-01-03T00:00:00Z',
        date_end: '2022-01-03T20:59:59Z',
    }
]

export { users, fastings }