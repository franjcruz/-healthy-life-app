import { sql } from '@vercel/postgres'
import { Fasting } from './definitions'

export async function fetchFastingByUser(user_id: string): Promise<Fasting[]> {
    try {
        console.log('Fetching revenue data...')
        await new Promise((resolve) => setTimeout(resolve, 3000))

        const { rows } = await sql<Fasting>`
        SELECT * FROM fastings
        WHERE user_id = ${user_id}
        `
        return rows
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching fasting records by user')
    }
}

export async function newFastingRecord(fasting: Fasting): Promise<Fasting> {
    try {
        const { rows } = await sql<Fasting>`
        INSERT INTO fastings (user_id, date_start)
        VALUES (${fasting.user_id}, ${fasting.date_start.toISOString()})
        RETURNING *
        `
        return rows[0]
    } catch (error) {
        console.error(error)
        throw new Error('Error creating new fasting record')
    }
}

export async function endFastingRecord(fasting: Fasting): Promise<Fasting> {
    try {
        const { rows } = await sql<Fasting>`
        UPDATE fastings
        SET date_end = ${fasting.date_end.toISOString()}
        WHERE id = ${fasting.id}
        RETURNING *
        `
        return rows[0]
    } catch (error) {
        console.error(error)
        throw new Error('Error ending fasting record')
    }
}