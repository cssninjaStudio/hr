import getBaseAPI from '../../utils/api';
import { getUrlParams } from "../../utils/utils";

const employeeId = getUrlParams("id");
console.log("ID", employeeId);

export function initEmployee() {
  return {
    isLoading: true,
    isEmpty: false,
    getEmployee() {
      const _this = this;
      if (employeeId != null || employeeId != undefined) {
        getBaseAPI()
          .get(`/employees/${employeeId}`)
          .then((response) => {
            console.log(response.data);
            _this.employee = response.data;
            setTimeout(() => {
              _this.isLoading = false;
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      else {
        _this.isEmpty = true;
      }
    },
    employee: {},
  };
}
