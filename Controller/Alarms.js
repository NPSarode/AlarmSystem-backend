import { db } from "../Database/DbConnection.js";

export const getAlarmsById = async (request, response) => {
  const { id } = request.params;
  const { rows } = await db.query(`SELECT * FROM get_alarms_by_id(${id});`);
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
  const { name, description, value, notification_list, threshold_value, alarm_type_id, machine_id } = request.body
  const obj = await db.query(`
  SELECT add_alarm(
    '${name}',
    '${description}',
    ${value},
    ${threshold_value},
    Array[${notification_list}],
    ${alarm_type_id},
    ${machine_id}
);
  `);
  response.send(obj);
};

export const getActiveAlarm = async (request, response) => {
  const { rows } = await db.query(`SELECT * FROM get_active_alarms();`);
  response.send(rows);
};

export const getAlarmHistory = async (request, response) => {
  const { rows } = await db.query(`SELECT * FROM get_alarm_history();`);
  response.send(rows);
};
