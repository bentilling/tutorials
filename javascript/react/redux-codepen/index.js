const redux = require('redux');

// Action Creators
const createPolicy = (name, amount) => {
  // Action
  return {
    type: 'CREATE_POLICY',
    payload: {
      name, amount
    }
  }
}

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name, amount
    }
  }
}

const removePolicy = (name) => {
  return {
    type: 'REMOVE_POLICY',
    payload: {
      name
    }
  }
}

// Reducers
const claims = (currentClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...currentClaims, action.payload]
  }
  return currentClaims
} 

const accounting = (balance=100, action) => {
  if (action.type === 'CREATE_POLICY') {
    return balance + action.payload.amount
  }
  if (action.type === 'CREATE_CLAIM') {
    return balance - action.payload.amount
  }
  return balance
}

const policies = (currentPolicies=[], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...currentPolicies, action.payload.name]
  }
  if (action.type === 'REMOVE_POLICY') {
    return currentPolicies.filter(name => name != action.payload.name)
  }
  return currentPolicies
}

const {combineReducers, createStore} = redux

const reducers = combineReducers({
  claimReducer: claims,
  accountingReducer: accounting,
  policyReducer: policies
});

const store = createStore(reducers);

console.log(store.getState());
store.dispatch(createPolicy('Ben', 60));
store.dispatch(createPolicy('Samantha', 40));
store.dispatch(createClaim('Ben', 70));
store.dispatch(removePolicy('Ben'));
console.log(store.getState());
