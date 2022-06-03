import { Post } from './entity/Post';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AppDataSource } from "./data-source"

// AppDataSource已经是实例了，不是对象了。
AppDataSource.initialize().then(
    async (dataSource) => {
        let mockData = [1,2,3,4,5,6,7,8,9,10].map((item) => {
            return new Post()
        })
        console.log(mockData, 'mockData')
        await AppDataSource.manager.save(mockData)
    },
    (error) =>
        console.log("Cannot connect: ", error.stack ? error.stack : error)
)