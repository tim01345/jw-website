module.exports = function (migration) {
  const industry = migration.createContentType('industry')
    .name('Industry')
    .description('Blog industry')
    .displayField('name');

  industry.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);
}; 