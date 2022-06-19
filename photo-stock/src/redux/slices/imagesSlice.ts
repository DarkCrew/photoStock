import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';

export const fetchImage = createAsyncThunk('images/fetchImage', async (searchItem: string) => {
  const data = await fetch(`https://api.pexels.com/v1/search?query=${searchItem}&per_page=12`, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const { photos } = await data.json();

  return photos;
});

const initialState = {
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
      state.items = [];
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchImage.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems } = imagesSlice.actions;

export default imagesSlice.reducer;
