import { Post } from './entity/Post';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"


AppDataSource.initialize().then(async (dataSource) => {
    const post = new Post()
    await AppDataSource.manager.save(post)

}).catch(error => console.log(error))
