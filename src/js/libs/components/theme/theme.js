export function initTheme() {
  return {
    dark: false,
    toggleTheme() {
      //this.dark = !this.dark;
      this.$store.app.isDark = !this.$store.app.isDark;
    },
  };
}
