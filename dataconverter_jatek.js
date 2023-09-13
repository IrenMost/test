// Required properties:
// name: string (required)
// url: string (required)
// description: string
// rating: integer (between 1 and 5)
// location: object (required)
//     latitude: float
//     longitude: float
// address: string (required)
// otherDetails: array of objects
//     key: string
//     value: string
//  provider: "string" *required
import { zomatoData } from './hotelData/zomato.js';
import { goibioData } from './hotelData/goibio.js';
import { makeMyTripData } from './hotelData/makeMyTrip.js';

const pointsOfInterests = [];

// Write your code here

export { pointsOfInterests };
