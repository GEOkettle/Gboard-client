export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'pretendard-regular': ['Pretendard-Bold', 'sans-serif'],
        'pretendard-smeiBold': ['Pretendard-Bold', 'sans-serif'],
        'pretendard-bold': ['Pretendard-Bold', 'sans-serif'],
        'pretendard-extraBold': ['Pretendard-Bold', 'sans-serif'],
      },
    },
  },
};

