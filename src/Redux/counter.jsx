import { createStore } from 'redux';

// Initial State
const initialState = { count: 0 };

// Reducer Function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

// Create Store
const store = createStore(counterReducer);

// Subscribe to Store
store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// Dispatch Actions
store.dispatch({ type: "INCREMENT" }); // { count: 1 }
store.dispatch({ type: "INCREMENT" }); // { count: 2 }
store.dispatch({ type: "DECREMENT" }); // { count: 1 }
store.dispatch({ type: "RESET" }); // { count: 0 }
