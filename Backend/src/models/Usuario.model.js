import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    admin:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    
}, {
    tableName: 'usuarios',
    timestamps: true,
});
