export type Reservation = {
    id: number;
    name: string;
    date: string;
    service: string;
};

export const mockReservations: Reservation[] = [
    { id: 1, name: 'John Doe', date: '2024-06-13T14:00:00Z', service: 'Haircut' },
    { id: 2, name: 'Jane Smith', date: '2024-06-13T15:00:00Z', service: 'Shave' },
    { id: 3, name: 'Alice Johnson', date: '2024-06-14T10:00:00Z', service: 'Beard Trim' },
    { id: 4, name: 'Bob Brown', date: '2024-06-14T11:30:00Z', service: 'Hair Coloring' },
    { id: 5, name: 'Charlie Davis', date: '2024-06-14T12:00:00Z', service: 'Facial' },
    { id: 6, name: 'Emily White', date: '2024-06-15T09:00:00Z', service: 'Haircut' },
    { id: 7, name: 'Michael Black', date: '2024-06-15T10:00:00Z', service: 'Shave' },
    { id: 8, name: 'Sarah Green', date: '2024-06-15T11:00:00Z', service: 'Beard Trim' },
    { id: 9, name: 'David Blue', date: '2024-06-16T14:00:00Z', service: 'Hair Coloring' },
    { id: 10, name: 'Laura Purple', date: '2024-06-16T15:00:00Z', service: 'Facial' },
    { id: 11, name: 'Paul Red', date: '2024-06-17T09:30:00Z', service: 'Haircut' },
    { id: 12, name: 'Anna Yellow', date: '2024-06-17T10:30:00Z', service: 'Shave' },
    { id: 13, name: 'Steve Brown', date: '2024-06-17T11:30:00Z', service: 'Beard Trim' },
    { id: 14, name: 'Rachel Blue', date: '2024-06-18T13:00:00Z', service: 'Hair Coloring' },
    { id: 15, name: 'Tom Gray', date: '2024-06-18T14:30:00Z', service: 'Facial' },
    { id: 16, name: 'Linda Pink', date: '2024-06-18T15:00:00Z', service: 'Haircut' },
    { id: 17, name: 'James Orange', date: '2024-06-19T09:00:00Z', service: 'Shave' },
    { id: 18, name: 'Jessica Cyan', date: '2024-06-19T10:00:00Z', service: 'Beard Trim' },
    { id: 19, name: 'Chris Violet', date: '2024-06-19T11:00:00Z', service: 'Hair Coloring' },
    { id: 20, name: 'Nancy Magenta', date: '2024-06-19T12:00:00Z', service: 'Facial' },
];
