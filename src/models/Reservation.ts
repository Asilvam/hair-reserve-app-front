import mongoose, { Document, Model, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface IReservation extends Document {
    id: string;
    name: string;
    date: string;
    phoneNumber: string;
}

const ReservationSchema: Schema<IReservation> = new Schema({
    id: { type: String, default: uuidv4 },
    name: { type: String, required: true },
    date: { type: String, required: true },
    phoneNumber: { type: String, required: true, match: /^\+569\d{8}$/ },
});

// Pre-save middleware to validate phone number format
ReservationSchema.pre<IReservation>('save', function (next) {
    if (!/^\+569\d{8}$/.test(this.phoneNumber)) {
        next(new Error('Invalid phone number format'));
    } else {
        next();
    }
});

const Reservation: Model<IReservation> = mongoose.models.Reservation || mongoose.model<IReservation>('Reservation', ReservationSchema);

export default Reservation;
