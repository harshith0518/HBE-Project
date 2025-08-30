import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name:'players'}) // default name we have given for this class in the db
export class Player {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    email:string;
    @Column({})
    password:string;
    @Column({unique:true})
    playerName:string;
    @Column({type:'boolean',default:true})
    active:boolean;
}