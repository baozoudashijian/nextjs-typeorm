import { User } from './entity/User';
import { Post } from './entity/Post';
import { DataSource, DataSourceOptions, createConnection } from 'typeorm';
import { AppDataSource } from "./data-source"
import { Comment } from './entity/Comment';

// AppDataSource已经是实例了，不是对象了。
AppDataSource.initialize().then(
    async (dataSource) => {
        const { manager } = AppDataSource

        const u1 = new User()
        u1.username = "rongerZhang"
        u1.passwordDigest = "zrj"
        await manager.save(u1)
        console.log('成功创建user')

        const p1 = new Post()
        p1.title = "我的第一篇文章"
        p1.content = "打的一拳开，免得百拳来"
        p1.author = u1
        await manager.save(p1)
        console.log('成功创建post')

        const c1 = new Comment()
        c1.user = u1
        c1.post = p1
        c1.content = "文章很棒！"
        await manager.save(c1)
        console.log('成功创建comment')

    },
    (error) =>
        console.log("Cannot connect: ", error.stack ? error.stack : error)
)