import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1654143101366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // try {
        //     return await queryRunner.createTable(new Table({
        //         name: 'users',
        //         columns: [
        //             {name: 'id', type: 'int', isGenerated: true, generationStrategy: 'increment', isPrimary: true},
        //             {name: 'username', type: 'varchar'},
        //             {name: 'passwordDigest', type: 'varchar'}
        //         ]
        //     }))
        // } catch (error) {

        // }
        return await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                { name: 'id', type: 'int', isGenerated: true, generationStrategy: 'increment', isPrimary: true },
                { name: 'username', type: 'varchar' },
                { name: 'passwordDigest', type: 'varchar' }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable('users')
    }

}
