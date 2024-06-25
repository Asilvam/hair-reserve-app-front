"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useId } from 'react';
import dynamic from 'next/dynamic';
import 'react-datepicker/dist/react-datepicker.css';
import './react-datepicker-custom.css';  // Import custom datepicker styles
import styles from './ReservationForm.module.css';

const Select = dynamic(() => import('react-select'), { ssr: false });

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
    const times = [];
    for (let i = 9; i <= 18; i++) {
        const hour = i.toString().padStart(2, '0');
        times.push({ value: `${hour}:00`, label: `${hour}:00` });
    }
    return times;
};

const dateOptions = generateDateOptions();
const timeSlots = generateTimeSlots();

const customSelectStyles = {
    control: (provided: any , state: any) => ({
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
    const [name, setName] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(dateOptions[0]);
    const [selectedTime, setSelectedTime] = useState<{ value: string, label: string } | null>(timeSlots[0]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedDate && selectedTime) {
            const dateTime = `${selectedDate.toISOString().split('T')[0]}T${selectedTime.value}:00`;
            alert(`Reservation made for ${name} on ${dateTime} for ${selectedTime.label}`);
        }
    };

    const handleReset = () => {
        setName('');
        setSelectedDate(dateOptions[0]);
        setSelectedTime(timeSlots[0]);
        // router.push('/'); // Navigate back to the principal page
    };

    const nameId = useId();
    const dateId = useId();
    const timeId = useId();

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
                        onChange={(option) => setSelectedTime(option)}
                        options={timeSlots}
                        className={styles.selectContainer}
                        instanceId={timeId}
                        inputId={timeId}
                        styles={customSelectStyles}
                        required
                    />
                )}
            </div>

            <button type="submit" className={styles.button}>
                Reservar
            </button>

        </form>
    );
};

export default ReservationForm;
