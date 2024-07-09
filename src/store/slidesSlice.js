
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slides: [
    { id: 1, image: 'https://www.contemporist.com/wp-content/uploads/2020/08/modern-house-lighting-architecture-260820-1114-02.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyrEE5AvKuNlzEiyc6f_CCeGaz7VrK8EQqg&s', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" },
    { id: 3, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" },
    { id: 4, image: 'https://t3.ftcdn.net/jpg/07/24/43/76/240_F_724437676_6aTqgYhJDWKZBgC798sfb7lpfz8FCdNq.jpg', text: 'DESIGNED FOR REAL ESTATE AGENTS.', caption: 'All Spaces With Friendly Environment', button: "Request For Call" }
  ],
  currentSlideIndex: 0
};

const slidesSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentSlideIndex = state.currentSlideIndex === state.slides.length - 1 ? 0 : state.currentSlideIndex + 1;
    },
    prevSlide: (state) => {
      state.currentSlideIndex = state.currentSlideIndex === 0 ? state.slides.length - 1 : state.currentSlideIndex - 1;
    }
  }
});

export const { nextSlide, prevSlide } = slidesSlice.actions;
export default slidesSlice.reducer;
