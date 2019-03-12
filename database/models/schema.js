import { Model } from 'objection';
import Knex from '../knex';

Model.knex(Knex);

class Section extends Model {
  static get tableName() {
    return 'sections';
  }

  static get relationMappings() {
    return {
      program: {
        relation: Model.BelongsToOneRelation,
        modelClass: Program,
        join: {
          from: 'sections.programs_id',
          to: 'programs.id',
        },
      },
    };
  }
}

class Program extends Model {
  static get tableName() {
    return 'programs';
  }

  static get relationMappings() {
    return {
      sections: {
        relation: Model.HasManyRelation,
        modelClass: Section,
        join: {
          from: 'programs.id',
          to: 'sections.programs_id',
        },
      },
    };
  }
}

module.exports = { Section, Program };
