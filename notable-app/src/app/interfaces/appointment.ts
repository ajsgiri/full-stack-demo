export interface Appointment {
    providerId: number
    appointmentId: number;
    patientName?: string;
    time?: string;
    kind?: string;
}