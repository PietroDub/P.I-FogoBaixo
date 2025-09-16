const Usuarios = require("./Usuarios");

class Clientes extends Usuarios{
    constructor(usuario_id,  nome, cpf, telefone, email, senha, cep, genero, data, cupon){
        super(usuario_id, nome, cpf, telefone, email, senha,);
        this.cep = cep;
        this.genero = genero;
        this.data = data;
        this.cupon = cupon;
    }
}
module.exports = Clientes;