module.exports = function cadastrarUsuarioUseCase({ usuariosRepository }) {
    return async function ({ nome_completo, cpf, telefone, endereco, email }) {
        await usuariosRepository.cadastrar({
            nome_completo, cpf, telefone, endereco, email
        })
    }
}