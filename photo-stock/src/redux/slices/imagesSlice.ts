import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';

export const fetchImage = createAsyncThunk(
  'images/fetchImage',
  async (dataSearch: { searchItem: string; currentPage: number }) => {
    const searchItem: string = dataSearch.searchItem;
    const currentPage: number = dataSearch.currentPage;
    const data = await fetch(
      `https://api.pexels.com/v1/search?query=${searchItem}&page=${currentPage}&per_page=12&`,
      {
        headers: {
          Authorization: API_KEY,
        },
      },
    );
    const { photos } = await data.json();

    return photos;
  },
);

type initialStateType = {
  items: any[];
  status: string;
};

const initialState: initialStateType = {
  items: [],
  status: 'loading',
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
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

export const { setItems } = imagesSlice.actions;

export default imagesSlice.reducer;
