import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';

let controller = new AbortController();

export const fetchImage = createAsyncThunk(
  'images/fetchImage',
  async (dataSearch: { searchItem: string; currentPages: number; orientation: string }) => {
    const currentPages: number = dataSearch.currentPages;
    let searchItem: string | null = dataSearch.searchItem;
    let orientation: string | null = dataSearch.orientation;
    let sizeImage: string | null = '';

    if (window.location.toString().includes('Category')) {
      orientation = localStorage.getItem('orientation');
      searchItem = localStorage.getItem('searchitem');
      if (localStorage.getItem('sizeimage') !== null) {
        sizeImage = localStorage.getItem('sizeimage');
      }
    }

    try {
      const data = await fetch(
        `https://api.pexels.com/v1/search?query=${searchItem}&page=${currentPages}&per_page=12&size=${sizeImage}&orientation=${orientation}`,
        {
          signal: controller.signal,
          headers: {
            Authorization: API_KEY,
          },
        },
      );
      const { photos, total_results } = await data.json();

      return { photos, total_results };
    } catch (err: any) {
      if (err.name == 'AbortError') {
        window.location.href = 'no-results';
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
  orientation: string;
  totalResults: number;
};

const initialState: initialStateType = {
  items: [],
  status: 'loading',
  searchItem: 'landscape',
  currentPages: 1,
  orientation: '',
  totalResults: 0,
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
    changeOrientaion(state, action) {
      state.orientation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImage.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload?.photos];
      state.status = 'success';
      state.totalResults = action.payload?.total_results;
      if (state.items.length === 0) {
        state.status = 'nothing';
        controller.abort();
      }
    });
    builder.addCase(fetchImage.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems, changeCurrentPage, setCurrentPage, setSearchItems, changeOrientaion } =
  imagesSlice.actions;

export default imagesSlice.reducer;
