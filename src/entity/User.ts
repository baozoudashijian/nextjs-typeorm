import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    username: string;

    @Column('varchar')
    passwordDigest: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
