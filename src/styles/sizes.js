export default {
  up(size) {
    const sizes = {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px"
    };
    return `@media (min-width: ${sizes[size]})`;
  },
  down(size) {
    const sizes = {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px"
    };
    return `@media (max-width: ${sizes[size]})`;
  }
};
