import { UserRole } from "../enums/user-role.enum";

export interface UserAuthResponse {
    id:number;
    role:UserRole;
    refresh_token_hash:string;
}


