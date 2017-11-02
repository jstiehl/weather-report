//Initial state will define our data model
const initialState = {
    data: {},
    month: 'December'
};

const weather = (state = initialState, action) => {
    switch(action.type) {
        case 'monthly_data_received':
            state = Object.assign({}, state, action.payload);
            break;
        default:
            state = initialState;
    }
    return state;
};

export default weather;