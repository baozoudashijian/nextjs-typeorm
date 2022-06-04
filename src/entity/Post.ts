import { User } from './User';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('posts')
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column('text')
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => User, user => user.posts)
    author: User

    
}
