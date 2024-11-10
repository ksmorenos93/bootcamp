import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'lab7kevin/store/counter.slice';

const store = configureStore ({

    reducer: {
        counter:counterSlice.reducer
    }
}

);

export default store;