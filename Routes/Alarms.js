import express from 'express'
import { addAlarm, deleteAlarmById, getAlarmTypes, getAlarmsById } from '../Controller/Alarms.js';

export const AlarmRoutes = express.Router()

AlarmRoutes.get('/alarms/:id', getAlarmsById);

AlarmRoutes.get('/alarm_types', getAlarmTypes);

AlarmRoutes.delete('/alarms/:id', deleteAlarmById);

AlarmRoutes.post('/alarms', addAlarm);
