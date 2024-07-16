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
import {FaSpinner} from "react-icons/fa";

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
    const [isLoading, setIsLoading] = useState(false);

    const validatePhoneNumber = (value: string) => {
        const phoneRegex = /^\+569\d{8}$/;
        return phoneRegex.test(value);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const dateTime = `${selectedDate?.toISOString().split('T')[0]}T${selectedTime?.value}:00`;
        const date = dateTime;
        const id = uuidv4();
        const now = new Date(); // Get current date and time
        const currentDate = now.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        const currentHour = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`; // Get current hour and minute in HH:mm format
        const currentDateTime = `${currentDate}T${currentHour}:00`; // Combine current date and time in YYYY-MM-DDTHH:mm:ss format

        if (!name) {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Mala...',
                text: 'Sin nombre? no pasa na!',
            });
            return;
        }
        if (!selectedDate) {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Mala...',
                text: 'y la fecha?!',
            });
            return;
        }
        if (!selectedTime) {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Mala...',
                text: 'Debes ingresar una hora',
            });
            return;
        }
        if (!validatePhoneNumber(phoneNumber)) {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Mala...',
                text: 'Ingresa un numero valido, asi +56912345678 ',
            });
            return;
        }
        if (dateTime < currentDateTime) {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Que mala WTF!',
                text: 'Esa Hora ya paso Bro!!',
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
                    setIsLoading(false);
                    Swal.fire({
                        icon: 'error',
                        title: 'Que mala WTF!',
                        text: 'Este horario ya esta ocupado Bro!',
                    });
                }
                throw new Error('Failed to submit reservation');
            }
            Swal.fire({
                icon: 'success',
                title: 'Buena!',
                text: `Esta Lista tu Reserva Bro ${name} validaremos tu presencia al numero ${phoneNumber}`,
            });
            router.push('/reservation');
        } catch (error) {
            console.error('Error:', error);
            // alert('Failed to submit reservation');
        }
        finally {
            setIsLoading(false);
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
                <label htmlFor={nameId} className={styles.label}>Tu nombre</label>
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
                <label htmlFor={dateId} className={styles.label}>Fecha</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    includeDates={dateOptions}
                    className={`${styles.datepickerWrapper} ${styles.input}`}
                    dateFormat="dd/MM/yyyy"
                    id={dateId}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={timeId} className={styles.label}>Hora</label>
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
                <label htmlFor={phoneId} className={styles.label}>Tu numero de celular</label>
                <input
                    type="text"
                    id={phoneId}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={styles.input}
                    required
                />
            </div>
            <button type="submit"
                    className={styles.button}
                    disabled={isLoading}
            >
                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <FaSpinner className="animate-spin text-4xl" />
                    </div>
                ) : (
                    'Reserve'
                )}
            </button>
            <button type="reset" className={styles.button} onClick={handleCancel}>
                Cancelar
            </button>
        </form>
    );
};

export default ReservationForm;
