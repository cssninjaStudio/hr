import { searchJSON } from "../search/searchJSON";

const url = "{{API_SERVER}}/employees";

export function initNavbar() {
  return {
    scrolled: false,
    height: 60,
    mobileOpen: false,
    mobileSearch: false,
    searchModel: "",
    scroll() {
      let scrollValue = window.scrollY;
      if (scrollValue >= this.height) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
      this.searchExpanded = false;
    },

    openMobileMenu() {
      this.mobileOpen = !this.mobileOpen;
    },
    searchData(e) {
      let searchTerm = e.target.value;
      const batch = searchJSON(searchTerm, url);
    },
    toggleMobileSearch() {
      this.mobileSearch = !this.mobileSearch;
      this.searchModel = "";
    },
  };
}
