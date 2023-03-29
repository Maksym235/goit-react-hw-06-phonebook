import { configureStore } from '@reduxjs/toolkit';

// import { contactsReduser, filterReduser } from './reduser';

import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
