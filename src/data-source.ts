import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Post } from './entity/Post'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "blog",
    password: "",
    database: "blog_development",
    synchronize: false,
    logging: false,
    entities: [User, Post],
    migrations: ['dist/migration/**/*.js'],
    subscribers: []
})
