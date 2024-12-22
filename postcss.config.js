export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export const loadConfig = async () => {
  const { default: tailwindcss } = await import('tailwindcss');
  const { default: autoprefixer } = await import('autoprefixer');
  return {
    plugins: [tailwindcss, autoprefixer],
  };
};
