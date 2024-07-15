"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useId } from 'react';
import dynamic from 'next/dynamic';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './ReservationForm.module.css';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import {useRouter} from "next/navigation";

const Select = dynamic(() => import('react-select'), { ssr: false });

interface OptionType {
    value: string;
    label: string;
}

const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 3; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date);
    }
    return dates;
};

const generateTimeSlots = () => {
    const times: OptionType[] = [];
    for (let i = 9; i <= 18; i++) {
        const hour = i.toString().padStart(2, '0');
        times.push({ value: `${hour}:00`, label: `${hour}:00` });
    }
    return times;
};

const dateOptions = generateDateOptions();
const timeSlots = generateTimeSlots();

const customSelectStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        borderColor: state.isFocused ? '#666' : '#ccc', // Change the border color when focused
        boxShadow: state.isFocused ? '0 0 0 1px #666' : 'none', // Change the box-shadow when focused
        '&:hover': {
            borderColor: '#666', // Change border color on hover
        },
        backgroundColor: '#fff',
    }),
    menu: (provided: any) => ({
        ...provided,
        backgroundColor: '#fff',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#545454' : state.isFocused ? '#838383' : '#ffffff',
        color: state.isSelected ? '#fff' : '#333',
    }),
};

const ReservationForm: React.FC = () => {
    const router = useRouter(); // Initialize router
    const [name, setName] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(dateOptions[0]);
    const [selectedTime, setSelectedTime] = useState<OptionType | null>(timeSlots[0]);
    const [phoneNumber, setPhoneNumber] = useState('+569');

    const validatePhoneNumber = (value: string) => {
        const phoneRegex = /^\+569\d{8}$/;
        return phoneRegex.test(value);
    }

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        const dateTime = `${selectedDate?.toISOString().split('T')[0]}T${selectedTime?.value}:00`;
        const date = dateTime;
        const id = uuidv4();
        const now = new Date(); // Get current date and time
        const currentDate = now.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        const currentHour = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`; // Get current hour and minute in HH:mm format
        const currentDateTime = `${currentDate}T${currentHour}:00`; // Combine current date and time in YYYY-MM-DDTHH:mm:ss format

        if (!name) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Name is required!',
            });
            return;
        }
        // Validate Date
        if (!selectedDate) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Date is required!',
            });
            return;
        }
        // Validate Time
        if (!selectedTime) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Time is required!',
            });
            return;
        }
        // Validate date to reserve and turn
        if (dateTime < currentDateTime) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...WTF',
                text: 'Esa Hora ya paso Bro!!',
            });
            return;
        }
        // Validate Phone Number
        if (!validatePhoneNumber(phoneNumber)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid phone number format. Please use +56912345678 format.',
            });
            return;
        }
        try {
            const response = await fetch('/api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, name, date, phoneNumber }),
            });
            if (!response.ok) {
                if (response.status === 409) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Este horario ya esta ocupado Bro!',
                    });
                }
                throw new Error('Failed to submit reservation');
            }
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: `Reservation made for ${name} with phone number ${phoneNumber}`,
            });
            router.push('/reservation');
        } catch (error) {
            console.error('Error:', error);
            // alert('Failed to submit reservation');
        }
        console.log('Form submitted', { id, name, date, phoneNumber });
    };

    const handleCancel = () => {
        router.push('/reservation'); // Navigate to the reservations page
    };

    const nameId = useId();
    const dateId = useId();
    const timeId = useId();
    const phoneId = useId();

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor={nameId} className={styles.label}>Name</label>
                <input
                    type="text"
                    id={nameId}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={dateId} className={styles.label}>Date</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    includeDates={dateOptions}
                    className={`${styles.datepickerWrapper} ${styles.input}`}
                    dateFormat="dd/MM/yyyy"
                    id={dateId}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={timeId} className={styles.label}>Time</label>
                {selectedTime && (
                    <Select
                        value={selectedTime}
                        onChange={(option: any) => setSelectedTime(option)}
                        options={timeSlots}
                        className={styles.selectContainer}
                        instanceId={timeId}
                        inputId={timeId}
                        styles={customSelectStyles}
                        required
                    />
                )}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={phoneId} className={styles.label}>Phone Number</label>
                <input
                    type="text"
                    id={phoneId}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={styles.input}
                    required
                />
            </div>
            <button type="submit" className={styles.button}>
                Reserve
            </button>
            <button type="reset" className={styles.button} onClick={handleCancel}>
                Cancelar
            </button>
        </form>
    );
};

export default ReservationForm;
