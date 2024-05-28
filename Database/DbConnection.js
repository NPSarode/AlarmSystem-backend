import pkg from "pg";

export const db = new pkg.Pool({
    connectionString: 'postgresql://postgres:1234@localhost:5432/alarm_system'
})
