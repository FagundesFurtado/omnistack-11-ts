import * as Knex from "knex";
import { TableBuilder } from 'knex';

const tableName = 'incidents'

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable(tableName, (table: TableBuilder) => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    })
}


export async function down(knex: Knex): Promise<any> {

    return knex.schema.dropTable(tableName);
}

