export interface IUser {
  id: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  bio: string | null;
  image: string | null;
  token: string;
}
