import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Adopcion = sequelize.define('Adopcion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_animal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_solicitud: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    estado: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
}, {
    tableName: 'adopciones',
    timestamps: true,
});
