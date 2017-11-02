//Initial state will define our data model
const initialState = {
    data: {},
    month: 'June'
};

const weather = (state = initialState, action) => {
    switch(action.type) {
        case 'monthly_data_received':
            state = Object.assign({}, state, action.payload);
            break;
    }
    return state;
};

export default weather;