import getBaseAPI from "../../utils/api";

export function initEmployees() {
  return {
    isLoading: true,
    getEmployees() {
      const _this = this;
      getBaseAPI()
        .get("/employees")
        .then((response) => {
          console.log(response.data);
          _this.employees = response.data;
          setTimeout(() => {
            _this.isLoading = false;
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    employees: [],
  };
}
