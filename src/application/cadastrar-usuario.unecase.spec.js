const cadastrarUsuarioUsecase = require("./cadastrar-usuario-usecase")

describe("Cadastrar usuário UseCase", function () {

    const usuariosRepository = {
        cadastrar: jest.fn()
    }

    test("Deve poder cadastrar usuário", async function () {
        const usuarioDTO = {
            nome_completo: "nome_valido",
            cpf: "CPF_valido",
            telefone: "telefone_valido",
            endereco: "endereco_valido",
            email: "email_valido"
        }
        const sut = cadastrarUsuarioUsecase({ usuariosRepository })
        const output = await sut(usuarioDTO)

        expect(output).toBeUndefined()
        expect(usuariosRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO)
        expect(usuariosRepository.cadastrar).toHaveBeenCalledTimes(1)
    })
})