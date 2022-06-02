This is a [Next.js](https://nextjs.org/) and [typeORM](https://typeorm.io/) project.

## 开始

首先安装数据库:

```bash
mkdir blog-data
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

初始化数据库:
yarn magination:run

启动项目:
yarn dev
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



