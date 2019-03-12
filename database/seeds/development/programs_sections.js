const programsData = require('../../../data/programs');
const sectionsData = require('../../../data/sections');

const createSection = (knex, section, program) => knex('programs').where('name', program).first()
  .then(programRecord => knex('sections').insert({
    name: section.name,
    description: section.description,
    overview_image: section.overview_image,
    order_index: section.order_index,
    html_content: section.html_content,
    programs_id: programRecord.id,
  }));

exports.seed = (knex, Promise) => knex('programs').del()
  .then(() => knex('sections').del())
  .then(() => knex('programs').insert(programsData))
  .then(() => {
    const sectionsPromises = [];
    for (let i = 0; i < sectionsData.length; i++) {
      const section = sectionsData[i];
      const { program } = section;
      sectionsPromises.push(createSection(knex, section, program));
    }
    return Promise.all(sectionsPromises);
  });
