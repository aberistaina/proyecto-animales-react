import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Raza = sequelize.define('Raza', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    id_especie: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
}, {
    tableName: 'razas',
    timestamps: true,
});
