module.exports = function (migration) {
  const category = migration.createContentType('category')
    .name('Category')
    .description('Blog category')
    .displayField('name');

  category.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);
}; 