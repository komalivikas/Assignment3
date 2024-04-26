// src/store/NASAStore.js
import create from 'zustand';

const useNASAStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async (date, startDate, endDate, count) => {
    set({ loading: true });
    try {
      let apiUrl = '/nasa/apod';
      if (date) {
        apiUrl += `?date=${date}`;
      } else if (startDate && endDate) {
        apiUrl += `?start_date=${startDate}&end_date=${endDate}`;
      } else if (count > 0) {
        apiUrl += `?count=${count}`;
      }
      const response = await fetch(apiUrl);
      const result = await response.json();
      set({ data: result, loading: false, error: null });
    } catch (error) {
      set({ error, loading: false });
    }
  },
}));

export default useNASAStore;
