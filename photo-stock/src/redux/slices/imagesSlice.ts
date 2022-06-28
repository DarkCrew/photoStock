import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stat } from 'fs';

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';
let controller = new AbortController();

export const fetchImage = createAsyncThunk(
  'images/fetchImage',
  async (dataSearch: { searchItem: string; currentPages: number }) => {
    const currentPages: number = dataSearch.currentPages;
    const searchItem: string = dataSearch.searchItem;
    try {
      const data = await fetch(
        `https://api.pexels.com/v1/search?query=${searchItem}&page=${currentPages}&per_page=12&`,
        {
          signal: controller.signal,
          headers: {
            Authorization: API_KEY,
          },
        },
      );
      const { photos } = await data.json();

      return photos;
    } catch (err: any) {
      if (err.name == 'AbortError') {
        alert('Ошибка запроса фото');
      } else {
        throw err;
      }
    }
  },
);

type initialStateType = {
  items: any[];
  status: string;
  searchItem: string;
  currentPages: number;
};

const initialState: initialStateType = {
  items: [],
  status: 'loading',
  searchItem: 'landscape',
  currentPages: 1,
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    changeCurrentPage(state) {
      state.currentPages = state.currentPages + 1;
    },
    setCurrentPage(state) {
      state.currentPages = 1;
    },
    setSearchItems(state, action) {
      state.searchItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImage.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.status = 'success';
      if (state.items.length === 0) {
        state.status = 'nothing';
      }
    });
    builder.addCase(fetchImage.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems, changeCurrentPage, setCurrentPage, setSearchItems } = imagesSlice.actions;

export default imagesSlice.reducer;
