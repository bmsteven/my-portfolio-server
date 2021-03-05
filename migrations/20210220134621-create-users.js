"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11),
      },
      first_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      middle_name: {
        type: Sequelize.STRING(50),
      },
      last_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: "must be a valid email address",
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
      },
      account_status: {
        type: Sequelize.STRING,
      },
      deleted_status: {
        type: Sequelize.BOOLEAN,
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      verification_code: {
        type: Sequelize.BIGINT(11),
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      suspendedAt: {
        type: Sequelize.DATE,
      },
      title: Sequelize.STRING,
      gender: Sequelize.STRING(1),
      about: Sequelize.TEXT("long"),
      bio: Sequelize.STRING,
      DOB: Sequelize.DATE,
      dp: Sequelize.STRING,
      cover_image: Sequelize.STRING,
      location: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users")
  },
}
