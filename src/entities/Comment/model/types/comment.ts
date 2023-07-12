import { UserData } from '@/entities/User';

export type Comment = {
  id: string,
  user: UserData,
  text: string
}
