import { db } from "../Database/DbConnection.js";

export const getAlarmsById = async (request, response) => {
  const { id } = request.params;
  const { rows } = await db.query(`
    SELECT A.id, A.name, A.description, A.value, A.alarm_type_id, A.status,array_agg(U.full_name) AS user_names   
    FROM alarms as A, unnest(A.notification_list) AS user_id 
    JOIN users U ON U.id = user_id
    WHERE A.machine_id = ${id}
    GROUP BY
    A.id;`);
  response.send(rows);
};

export const deleteAlarmById = async (request, response) => {
  const { id } = request.params;
  const { rows } = await db.query(`DELETE FROM alarms WHERE id = ${id}`);
  response.send(rows);
};

export const getAlarmTypes = async (request, response) => {
  const { rows } = await db.query('SELECT * FROM alarm_types');
  response.send(rows);
};

export const addAlarm = async (request, response) => {
  const { name, description, value, status, notification_list } = request.body
  const { rows } = await db.query(`
  INSERT INTO alarms (name, description, value, status, notification_list) VALUES (${name}, ${description}, ${value}, ${status}, ${notification_list})
  `);
  response.send(rows);
};
