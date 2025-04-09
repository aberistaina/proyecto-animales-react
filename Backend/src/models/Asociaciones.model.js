import { Usuario } from "./Usuario.model.js";
import { Animal } from "./Animal.model.js";
import { Especie } from "./Especie.model.js";
import { Raza } from "./Raza.model.js";
import { Adopcion } from "./Adopcion.model.js";


Usuario.hasMany(Adopcion, {
    foreignKey: "id_usuario",
    as: "adopciones",
});
Adopcion.belongsTo(Usuario, {
    foreignKey: "id_usuario",
    as: "usuario",
});

Adopcion.belongsTo(Animal, {
    foreignKey: "id_animal",
    as: "animal",
});

Animal.hasMany(Adopcion, {
    foreignKey: "id_animal",
    as: "adopciones",
});

Animal.belongsTo(Raza, {
    foreignKey: "id_raza",
    as: "raza",
});

Animal.belongsTo(Especie, {
    foreignKey: "id_especie",
    as: "especie",
});

Raza.hasMany(Animal, {
    foreignKey: "id_raza",
    as: "animales",
});

Especie.hasMany(Animal, {
    foreignKey: "id_especie",
    as: "animales",
});

Raza.belongsTo(Especie, {
    foreignKey: "id_especie",
    as: "especie",
});

Especie.hasMany(Raza, {
    foreignKey: "id_especie",
    as: "razas",
});