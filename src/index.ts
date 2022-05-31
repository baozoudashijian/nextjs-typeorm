import { Post } from './entity/Post';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

    const post = new Post()
    post.title = "第一篇文章"
    post.content = "那就这样吧，再学下去就不礼貌了！"
    await AppDataSource.manager.save(post)

    const posts = await AppDataSource.manager.find(Post)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
