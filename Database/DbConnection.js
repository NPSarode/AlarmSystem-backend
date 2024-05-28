import pkg from "pg";

export const db = new pkg.Pool({
    connectionString: 'postgresql://postgres:Nikhil%40123@localhost:3000/alarm_system'
})
