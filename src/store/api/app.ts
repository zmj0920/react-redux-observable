import { map } from "rxjs";
import { ajax } from "rxjs/ajax";

export function getUsers() {
  return ajax.get('api/users').pipe(
    map(() => {
      return { "username": "小明", "sex": "男",  "id": 1, "dept": { "id": 103, "name": "研发部门" } }
    })
  );
}
