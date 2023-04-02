export interface AppState {
  count: number,
  user: User
}

export interface User {
  username: string;
  sex: string;
  id: number;
  dept: {
    id: number;
    name: string;
  };
}
