import { Post } from './entity/Post';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"


AppDataSource.initialize().then(async (dataSource) => {
    const post = new Post({title: '第四篇文章', content: '那就这样吧，再学下去就不礼貌了！'})
    await AppDataSource.manager.save(post)

}).catch(error => console.log(error))
