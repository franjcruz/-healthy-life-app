import bcrypt from 'bcrypt'
import { db } from '@vercel/postgres'
import { users, fasting } from '../lib/placeholder-data'

// @ts-expect-error: `Response` is declared but its value is never read
const client = await db.connect()

async function seedUsers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `

    const insertedUsers = await Promise.all(
        users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10)
            return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `
        }),
    )

    return insertedUsers
}

async function seedFasting() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    await client.sql`
    CREATE TABLE IF NOT EXISTS fasting (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      date_start DATE NOT NULL,
      date_end DATE
    );
  `

    const insertedFasting = await Promise.all(
        fasting.map((f) => {
            const dateStart = f.date_start instanceof Date ? f.date_start.toISOString().split('T')[0] : f.date_start
            const dateEnd = f.date_end instanceof Date ? f.date_end.toISOString().split('T')[0] : f.date_end

            return client.sql`
            INSERT INTO fasting (user_id, date_start, date_end)
            VALUES (${f.user_id}, ${dateStart}, ${dateEnd})
            ON CONFLICT (id) DO NOTHING;
            `
        }),
    )

    return insertedFasting
}

export async function GET() {
    return Response.json({
        message:
            'Uncomment this file and remove this line. You can delete this file when you are finished.',
    })
    try {
        await client.sql`BEGIN`
        await seedUsers()
        await seedFasting()
        await client.sql`COMMIT`

        return Response.json({ message: 'Database seeded successfully' })
    } catch (error) {
        await client.sql`ROLLBACK`
        return Response.json({ error }, { status: 500 })
    }
}