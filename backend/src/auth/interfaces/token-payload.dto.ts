import { UserRole } from "src/user/enums/user-role.enum";

export interface TokenPayload {
  userId: number;
  userRole:UserRole;
}
