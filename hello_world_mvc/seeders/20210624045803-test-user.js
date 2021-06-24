'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const now = new Date();
    return queryInterface.bulkInsert('Users', [
      { name: 'テストA', email: 'aaa@example.com', password: 'aaa-password', createdAt: now, updatedAt: now },
      { name: 'テストB', email: 'bbb@example.com', password: 'bbb-password', createdAt: now, updatedAt: now },
      { name: 'テストC', email: 'ccc@example.com', password: 'ccc-password', createdAt: now, updatedAt: now },
      { name: 'テストD', email: 'ddd@example.com', password: 'ddd-password', createdAt: now, updatedAt: now },
      { name: 'テストE', email: 'eee@example.com', password: 'eee-password', createdAt: now, updatedAt: now },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
