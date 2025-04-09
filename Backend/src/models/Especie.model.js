import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Especie = sequelize.define('Especie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    
}, {
    tableName: 'especies',
    timestamps: true,
});
