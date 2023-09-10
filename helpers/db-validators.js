const { Categoria, Usuario, Role, Producto } = require('../models');

const esRoleValido = async (rol = '') => {
	const existeRol = await Role.findOne({ rol });
	if (!existeRol) {
		throw new Error(`El rol ${rol} no está registrado en la BD.`);
	}
};

const emailExiste = async (correo = '') => {
	// Verificar si el correo existe
	const existeEmail = await Usuario.findOne({ correo });
	if (existeEmail) {
		throw new Error(`El correo ${correo} ya existe en la BD.`);
	}
};

const existeUsuarioPorId = async (id) => {
	const existeUsuario = await Usuario.findById(id);
	if (!existeUsuario) {
		throw new Error(`El id ${id} no existe en la BD.`);
	}
};

const existeCategoriaPorId = async (id) => {
	const existeCategoria = await Categoria.findById(id);
	if (!existeCategoria) {
		throw new Error(`La categoría con el id ${id} no existe en la BD.`);
	}
};

const existeProductoPorId = async (id) => {
	const existeProducto = await Producto.findById(id);
	if (!existeProducto) {
		throw new Error(`El producto con el id ${id} no existe en la BD.`);
	}
};

module.exports = {
	esRoleValido,
	emailExiste,
	existeUsuarioPorId,
	existeCategoriaPorId,
	existeProductoPorId,
};
