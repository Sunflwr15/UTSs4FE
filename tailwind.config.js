/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#577399",
        // white: "#e9ecef",
      },
      backgroundColor: {
        "white": "#e9ecef",
      },
      backgroundImage: {
        login:
          "url('https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8&w=1000&q=80')",
      },
    },
  },
  plugins: [],
};
