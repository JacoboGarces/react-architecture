/* eslint-disable @typescript-eslint/no-explicit-any */
export const initialState = {
  services: [
    {
      name: 'a',
      price: '3434'
    },
    {
      name: 'b',
      price: '3434'
    },
    {
      name: 'c',
      price: '434545'
    },
    {
      name: 'd',
      price: '2324'
    },
  ],
  service: null
};

enum Actions {
  loadServices = 'LOAD_SERVICES'
}

const useCases = {
  [Actions.loadServices]: (state: any, payload: any) => ({...state, service: payload})
};

export const reducer = (state: any, action: { type: Actions, payload: any}): any => {
  return useCases[action.type](state, action.payload) || state;
};
