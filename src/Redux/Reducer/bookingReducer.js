import { ADD_BOOKING, REMOVE_BOOKING } from '../Action/actionBooking';
import Horse1 from "../../assets/david-dibert-Huza8QOO3tc-unsplash.jpg";
import Horse2 from "../../assets/guillermo-mota-ax2WNRH_bec-unsplash1.jpg";
import Horse3 from "../../assets/helena-lopes-lIeqGEdvex0-unsplash.jpg";
import Horse4 from "../../assets/selcuk-ulutas-CbnogotK6P8-unsplash.jpg";

const initialState = {
    horses: [
        { id: 1, name: 'Silver Blaze', image: Horse1 },
        { id: 2, name: 'White Beauty', image: Horse2 },
        { id: 3, name: 'Red Rum', image: Horse3 },
        { id: 4, name: 'Seabiscuit', image: Horse4 },
    ],
    bookings: []
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload],
            };
        case REMOVE_BOOKING:
            return {
                ...state,
                bookings: state.bookings.filter(booking => booking.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export default bookingReducer;
