const initialState = {
  store: {},
  fetching: false,
  fetched: false
};

export default function reducers(state= initialState, action) {
  switch (action.type) {
    case 'GET_STORE':
      return {...state, fetching: true};
    case 'GET_STORE_REJECTED':
      return {...state, fetching: false, error: action.payload};
    case 'GET_STORE_FULFILLED' :
      return {
        ...state,
        fetching: false,
        fetched: true,
        store: action.payload
        };
    default:
      return state;
    }
}