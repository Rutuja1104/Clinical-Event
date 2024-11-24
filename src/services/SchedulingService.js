import AppDataService from './AppDataService'

const COMMON_BASE = 'appointments'

export default class SchedulingService {
    static async postAddNewPatient(data) {
        return await AppDataService.post(`${COMMON_BASE}/patient`, data)
    }
    static async getAllScheduleAppointments(params) {
        return await AppDataService.get(`${COMMON_BASE}/schedule/details`,  params )
    }
    static async postAppointmentsSlots(data) {
        return await AppDataService.post(`${COMMON_BASE}/slot`, data)
    }
    static async postCreateNewAppointment(data) {
        return await AppDataService.post(`${COMMON_BASE}`, data)
    }
    static async postScheduleBlockAppointment(data) {
        return await AppDataService.post(`${COMMON_BASE}/block`, data)
    }
    static async deleteScheduledAppointment(scheduleId) {
        return await AppDataService.delete(`${COMMON_BASE}/schedule/${scheduleId}`)
    }
    static async patchScheduledAppointment(scheduleId, data) {
        return await AppDataService.patch(`${COMMON_BASE}/schedule/${scheduleId}`, data)
    }
    static async getScheduleById(scheduleId) {
        return await AppDataService.get(`${COMMON_BASE}/schedule/${scheduleId}`)
    }
    static async getAuthenticationToken(scheduleId, type) {
        return await AppDataService.get(`${COMMON_BASE}/generate/token?id=${scheduleId}&type=${type}`)
    }
    static async getZoomAuthJwtTokenForGuest(scheduleId, tenetId, type) {
        return await AppDataService.get(`${COMMON_BASE}/generate/token/${tenetId}?id=${scheduleId}&type=${type}`)
    }
    static async postSendInviteToGuest({ body }) {
        return await AppDataService.post(`${COMMON_BASE}/add-user`, body);
    }
    static async getAllProviders({ params }) {
        return await AppDataService.get(`provider`, { params });
    }
    static async postSendReminder({ scheduleId }) {
        return await AppDataService.post(`encounter/reminder/${scheduleId}`, {});
    }
    static async getPatientListSelect(params) {
        return await AppDataService.get(`patients`, { params });
    }
    static async getProvidersListSelect(params) {
        return await AppDataService.get(`providers`, { params });
    }
    static async getAppointmentScheduleDetails({ scheduleId, tenetId }) {
        return await AppDataService.get(`appointments/schedule/${scheduleId}/${tenetId}`);
    }
    static async patchUpdateScheduleDetails({ scheduleId, body }) {
        return await AppDataService.patch(`appointments/schedule/${scheduleId}`, body);
    }
    static async postInstantAppointmentBooking(data) {
        return await AppDataService.post(`${COMMON_BASE}/instant`, data)
    }
    static async getAppointmentById(scheduleId) {
        return await AppDataService.get(`${COMMON_BASE}/schedule/${scheduleId}`)
    }
}