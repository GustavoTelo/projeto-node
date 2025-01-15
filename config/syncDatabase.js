const { sequelize } = require('./database');
const ATT_DATABASE = false;


const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: ATT_DATABASE });
        console.log('Database synchronized successfully.');
    } catch (err) {
        console.error('Error synchronizing the database:', err);
    }
};

module.exports = syncDatabase;
