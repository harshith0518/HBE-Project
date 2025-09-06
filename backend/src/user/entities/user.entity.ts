import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../enums/user-role.enum";


@Entity({name:'user'})
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    email:string;

    @Column({unique:true})
    mobile:string; // country-code space 10 digit number
    @Column()
    password:string;

    @Column({unique:true})
    name:string;

    @Column({type:'boolean',default:true}   )
    active:boolean;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;

    @Column({default:''})
    refresh_token_hash:string;
}



