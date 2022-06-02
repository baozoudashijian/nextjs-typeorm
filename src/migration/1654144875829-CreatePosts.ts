import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePosts1654144875829 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name: 'posts',
            columns: [
                {name: 'id', type: 'int', isGenerated: true, isPrimary: true, generationStrategy: 'increment'},
                {name: 'title', type: 'varchar'},
                {name: 'content', type: 'text'},
                {name: 'authorId', type: 'int'}
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable('posts')
    }

}
