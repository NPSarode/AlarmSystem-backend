import express from 'express'
import { addAlarm, deleteAlarmById, getActiveAlarm, getAlarmHistory, getAlarmTypes, getAlarmsById, updateAlarm } from '../Controller/Alarms.js';

export const AlarmRoutes = express.Router()

AlarmRoutes.get('/alarms/:id', getAlarmsById);

AlarmRoutes.get('/alarm_types', getAlarmTypes);

AlarmRoutes.delete('/alarms/:id', deleteAlarmById);

AlarmRoutes.post('/alarms', addAlarm);

AlarmRoutes.put('/alarms', updateAlarm);

AlarmRoutes.get('/active_alarm', getActiveAlarm);

AlarmRoutes.get('/alarm_history', getAlarmHistory);

