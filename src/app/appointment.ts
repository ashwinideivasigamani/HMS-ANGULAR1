import { Patient } from './patient';
import { Doctor } from './doctor';

export class Appointment {
  id!: number;
  patient: Patient = new Patient;
  doctor: Doctor = new Doctor;
  appointmentDateTime!:Date;
  status!: string;
}
