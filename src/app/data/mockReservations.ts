export type Reservation = {
    id: number;
    name: string;
    date: string;
    service: string;
};

const reservations: Reservation[] = [
    { id: 1, name: 'Harrison Ford', date: '2024-06-13T14:00:00Z', service: 'Haircut' },
    { id: 2, name: 'Sigourney Weaver', date: '2024-06-13T15:00:00Z', service: 'Shave' },
    { id: 3, name: 'Tom Cruise', date: '2024-06-14T10:00:00Z', service: 'Haircut' },
    { id: 4, name: 'Meryl Streep', date: '2024-06-14T11:00:00Z', service: 'Haircut' },
    { id: 5, name: 'Arnold Schwarzenegger', date: '2024-06-14T13:00:00Z', service: 'Shave' },
    { id: 6, name: 'Eddie Murphy', date: '2024-06-15T09:00:00Z', service: 'Haircut' },
    { id: 7, name: 'Michael J. Fox', date: '2024-06-15T10:00:00Z', service: 'Haircut' },
    { id: 8, name: 'Demi Moore', date: '2024-06-15T11:00:00Z', service: 'Shave' },
    { id: 9, name: 'Patrick Swayze', date: '2024-06-16T14:00:00Z', service: 'Haircut' },
    { id: 10, name: 'Michelle Pfeiffer', date: '2024-06-16T15:00:00Z', service: 'Shave' },
    { id: 11, name: 'Jack Nicholson', date: '2024-06-17T12:00:00Z', service: 'Haircut' },
    { id: 12, name: 'Mel Gibson', date: '2024-06-17T14:00:00Z', service: 'Haircut' },
    { id: 13, name: 'Sean Connery', date: '2024-06-17T16:00:00Z', service: 'Shave' },
    { id: 14, name: 'Kevin Costner', date: '2024-06-18T09:00:00Z', service: 'Haircut' },
    { id: 15, name: 'Kathleen Turner', date: '2024-06-18T11:00:00Z', service: 'Shave' },
    { id: 16, name: 'Tom Hanks', date: '2024-06-18T13:00:00Z', service: 'Haircut' },
    { id: 17, name: 'Dustin Hoffman', date: '2024-06-19T10:00:00Z', service: 'Haircut' },
    { id: 18, name: 'Jessica Lange', date: '2024-06-19T11:00:00Z', service: 'Shave' },
    { id: 19, name: 'Al Pacino', date: '2024-06-19T12:00:00Z', service: 'Haircut' },
    { id: 20, name: 'Sharon Stone', date: '2024-06-20T14:00:00Z', service: 'Shave' },
    { id: 21, name: 'Bruce Willis', date: '2024-06-20T15:00:00Z', service: 'Haircut' },
    { id: 22, name: 'Robin Williams', date: '2024-06-21T09:00:00Z', service: 'Haircut' },
    { id: 23, name: 'Julia Roberts', date: '2024-06-21T10:00:00Z', service: 'Shave' },
    { id: 24, name: 'Sylvester Stallone', date: '2024-06-21T11:00:00Z', service: 'Haircut' },
    { id: 25, name: 'Geena Davis', date: '2024-06-22T12:00:00Z', service: 'Haircut' },
    { id: 26, name: 'Michael Douglas', date: '2024-06-22T13:00:00Z', service: 'Shave' },
    { id: 27, name: 'Whoopi Goldberg', date: '2024-06-22T14:00:00Z', service: 'Haircut' },
    { id: 28, name: 'Denzel Washington', date: '2024-06-23T15:00:00Z', service: 'Shave' },
    { id: 29, name: 'Kurt Russell', date: '2024-06-23T16:00:00Z', service: 'Haircut' },
    { id: 30, name: 'Cher', date: '2024-06-23T17:00:00Z', service: 'Haircut' },
    { id: 31, name: 'Christopher Reeve', date: '2024-06-24T10:00:00Z', service: 'Shave' },
    { id: 32, name: 'Kelly McGillis', date: '2024-06-24T11:00:00Z', service: 'Haircut' },
    { id: 33, name: 'Robert De Niro', date: '2024-06-24T12:00:00Z', service: 'Haircut' },
    { id: 34, name: 'Kathleen Turner', date: '2024-06-25T13:00:00Z', service: 'Shave' },
    { id: 35, name: 'Michael Keaton', date: '2024-06-25T14:00:00Z', service: 'Haircut' },
    { id: 36, name: 'Sean Young', date: '2024-06-25T15:00:00Z', service: 'Haircut' },
    { id: 37, name: 'Patrick Swayze', date: '2024-06-26T16:00:00Z', service: 'Shave' },
    { id: 38, name: 'Michelle Pfeiffer', date: '2024-06-26T17:00:00Z', service: 'Haircut' },
    { id: 39, name: 'Jack Nicholson', date: '2024-06-26T18:00:00Z', service: 'Haircut' },
    { id: 40, name: 'Mel Gibson', date: '2024-06-27T09:00:00Z', service: 'Shave' },
    { id: 41, name: 'Sean Connery', date: '2024-06-27T10:00:00Z', service: 'Haircut' },
    { id: 42, name: 'Kevin Costner', date: '2024-06-27T11:00:00Z', service: 'Haircut' },
    { id: 43, name: 'Christopher Lloyd', date: '2024-06-28T12:00:00Z', service: 'Shave' },
    { id: 44, name: 'Tom Hanks', date: '2024-06-28T13:00:00Z', service: 'Haircut' },
    { id: 45, name: 'Dustin Hoffman', date: '2024-06-28T14:00:00Z', service: 'Haircut' },
    { id: 46, name: 'Jessica Lange', date: '2024-06-29T15:00:00Z', service: 'Shave' },
    { id: 47, name: 'Al Pacino', date: '2024-06-29T16:00:00Z', service: 'Haircut' },
    { id: 48, name: 'Sharon Stone', date: '2024-06-29T17:00:00Z', service: 'Haircut' },
    { id: 49, name: 'Bruce Willis', date: '2024-06-30T18:00:00Z', service: 'Shave' },
    { id: 50, name: 'Robin Williams', date: '2024-06-30T19:00:00Z', service: 'Haircut' },
];

export default reservations;

