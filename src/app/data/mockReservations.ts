export type Reservation = {
    id: number;
    name: string;
    date: string;
    phoneNumber: string;
};

const reservations: Reservation[] =
    [
        {
            "id": 1,
            "name": "Michael Jackson",
            "date": "2024-06-14T09:00:00Z",
            "phoneNumber": "+56912345678"
        },
        {
            "id": 2,
            "name": "Madonna",
            "date": "2024-06-14T10:00:00Z",
            "phoneNumber": "+56923456789"
        },
        {
            "id": 3,
            "name": "Prince",
            "date": "2024-06-14T11:00:00Z",
            "phoneNumber": "+56934567890"
        },
        {
            "id": 4,
            "name": "Whitney Houston",
            "date": "2024-06-14T12:00:00Z",
            "phoneNumber": "+56945678901"
        },
        {
            "id": 5,
            "name": "David Bowie",
            "date": "2024-06-14T13:00:00Z",
            "phoneNumber": "+56956789012"
        },
        {
            "id": 6,
            "name": "Bruce Springsteen",
            "date": "2024-06-14T14:00:00Z",
            "phoneNumber": "+56967890123"
        },
        {
            "id": 7,
            "name": "Tina Turner",
            "date": "2024-06-14T15:00:00Z",
            "phoneNumber": "+56978901234"
        },
        {
            "id": 8,
            "name": "Billy Joel",
            "date": "2024-06-14T16:00:00Z",
            "phoneNumber": "+56989012345"
        },
        {
            "id": 9,
            "name": "George Michael",
            "date": "2024-06-14T17:00:00Z",
            "phoneNumber": "+56990123456"
        },
        {
            "id": 10,
            "name": "Cyndi Lauper",
            "date": "2024-06-14T18:00:00Z",
            "phoneNumber": "+56901234567"
        },
        {
            "id": 11,
            "name": "Bon Jovi",
            "date": "2024-06-15T09:00:00Z",
            "phoneNumber": "+56912345678"
        },
        {
            "id": 12,
            "name": "U2",
            "date": "2024-06-15T10:00:00Z",
            "phoneNumber": "+56923456789"
        },
        {
            "id": 13,
            "name": "The Police",
            "date": "2024-06-15T11:00:00Z",
            "phoneNumber": "+56934567890"
        },
        {
            "id": 14,
            "name": "Phil Collins",
            "date": "2024-06-15T12:00:00Z",
            "phoneNumber": "+56945678901"
        },
        {
            "id": 15,
            "name": "Duran Duran",
            "date": "2024-06-15T13:00:00Z",
            "phoneNumber": "+56956789012"
        },
        {
            "id": 16,
            "name": "Stevie Wonder",
            "date": "2024-06-15T14:00:00Z",
            "phoneNumber": "+56967890123"
        },
        {
            "id": 17,
            "name": "Queen",
            "date": "2024-06-15T15:00:00Z",
            "phoneNumber": "+56978901234"
        },
        {
            "id": 18,
            "name": "Eurythmics",
            "date": "2024-06-15T16:00:00Z",
            "phoneNumber": "+56989012345"
        },
        {
            "id": 19,
            "name": "Depeche Mode",
            "date": "2024-06-15T17:00:00Z",
            "phoneNumber": "+56990123456"
        },
        {
            "id": 20,
            "name": "Pet Shop Boys",
            "date": "2024-06-15T18:00:00Z",
            "phoneNumber": "+56901234567"
        },
        {
            "id": 21,
            "name": "Simple Minds",
            "date": "2024-06-16T09:00:00Z",
            "phoneNumber": "+56912345678"
        },
        {
            "id": 22,
            "name": "A-ha",
            "date": "2024-06-16T10:00:00Z",
            "phoneNumber": "+56923456789"
        },
        {
            "id": 23,
            "name": "Culture Club",
            "date": "2024-06-16T11:00:00Z",
            "phoneNumber": "+56934567890"
        },
        {
            "id": 24,
            "name": "INXS",
            "date": "2024-06-16T12:00:00Z",
            "phoneNumber": "+56945678901"
        },
        {
            "id": 25,
            "name": "Tears for Fears",
            "date": "2024-06-16T13:00:00Z",
            "phoneNumber": "+56956789012"
        },
        {
            "id": 26,
            "name": "The Cure",
            "date": "2024-06-16T14:00:00Z",
            "phoneNumber": "+56967890123"
        },
        {
            "id": 27,
            "name": "New Order",
            "date": "2024-06-16T15:00:00Z",
            "phoneNumber": "+56978901234"
        },
        {
            "id": 28,
            "name": "Talk Talk",
            "date": "2024-06-16T16:00:00Z",
            "phoneNumber": "+56989012345"
        },
        {
            "id": 29,
            "name": "Spandau Ballet",
            "date": "2024-06-16T17:00:00Z",
            "phoneNumber": "+56990123456"
        },
        {
            "id": 30,
            "name": "Yazoo",
            "date": "2024-06-16T18:00:00Z",
            "phoneNumber": "+56901234567"
        },
        {
            "id": 31,
            "name": "Frankie Goes to Hollywood",
            "date": "2024-06-17T09:00:00Z",
            "phoneNumber": "+56912345678"
        },
        {
            "id": 32,
            "name": "Erasure",
            "date": "2024-06-17T10:00:00Z",
            "phoneNumber": "+56923456789"
        },
        {
            "id": 33,
            "name": "Bananarama",
            "date": "2024-06-17T11:00:00Z",
            "phoneNumber": "+56934567890"
        },
        {
            "id": 34,
            "name": "Dead or Alive",
            "date": "2024-06-17T12:00:00Z",
            "phoneNumber": "+56945678901"
        },
        {
            "id": 35,
            "name": "Soft Cell",
            "date": "2024-06-17T13:00:00Z",
            "phoneNumber": "+56956789012"
        },
        {
            "id": 36,
            "name": "Orchestral Manoeuvres in the Dark",
            "date": "2024-06-17T14:00:00Z",
            "phoneNumber": "+56967890123"
        },
        {
            "id": 37,
            "name": "The Human League",
            "date": "2024-06-17T15:00:00Z",
            "phoneNumber": "+56978901234"
        },
        {
            "id": 38,
            "name": "Dexys Midnight Runners",
            "date": "2024-06-17T16:00:00Z",
            "phoneNumber": "+56989012345"
        },
        {
            "id": 39,
            "name": "OMD",
            "date": "2024-06-17T17:00:00Z",
            "phoneNumber": "+56990123456"
        },
        {
            "id": 40,
            "name": "The B-52s",
            "date": "2024-06-17T18:00:00Z",
            "phoneNumber": "+56901234567"
        },
        {
            "id": 41,
            "name": "Kraftwerk",
            "date": "2024-06-18T09:00:00Z",
            "phoneNumber": "+56912345678"
        },
        {
            "id": 42,
            "name": "The Smiths",
            "date": "2024-06-18T10:00:00Z",
            "phoneNumber": "+56923456789"
        },
        {
            "id": 43,
            "name": "Public Image Ltd",
            "date": "2024-06-18T11:00:00Z",
            "phoneNumber": "+56934567890"
        },
        {
            "id": 44,
            "name": "Blondie",
            "date": "2024-06-18T12:00:00Z",
            "phoneNumber": "+56945678901"
        },
        {
            "id": 45,
            "name": "Aerosmith",
            "date": "2024-06-18T13:00:00Z",
            "phoneNumber": "+56956789012"
        },
        {
            "id": 46,
            "name": "Dire Straits",
            "date": "2024-06-18T14:00:00Z",
            "phoneNumber": "+56967890123"
        },
        {
            "id": 47,
            "name": "The Clash",
            "date": "2024-06-18T15:00:00Z",
            "phoneNumber": "+56978901234"
        },
        {
            "id": 48,
            "name": "Joy Division",
            "date": "2024-06-18T16:00:00Z",
            "phoneNumber": "+56989012345"
        },
        {
            "id": 49,
            "name": "Siouxsie and the Banshees",
            "date": "2024-06-18T17:00:00Z",
            "phoneNumber": "+56990123456"
        },
        {
            "id": 50,
            "name": "The Cure",
            "date": "2024-06-18T18:00:00Z",
            "phoneNumber": "+56901234567"
        }
    ];

export default reservations;

