### Reunião

> Somos uma biblioteca pequena e gostariamos de controlar a nossa entrada e saída de livros. Queremos cadastrar o usuário que irá pegar o livro emprestado, cadastrar os livros da nossa biblioteca e pode emprestar para qualque usuário, além de buscar os registros de empréstimos.

## Dados

- Usuário: [nome_completo, CPF, telefone, endereço, email]
- Livro: [nome, quantidade, autor, genero, ISBN]
- Emprestimo: [usuario_id, livro_id, data_retorno, data_devolucao, data_saida]

## UseCases (Regas de negócio)

[] Cadastrar um novo usuário
[] - CPF ou email devem ser únicos

[] Buscar um cadastrode usuário por CPF
[] - Retornar o usuário ou vazio

[] Cadastrar um novo livro
[] - ISBN deve ser único

[] Buscar um livro por nome ou ISBN
[] - Retornar os livros ou vazio

[] Emprestar um livro ao usuário
[] - A data de retorno não pode ser menor que a data de saída
[] - Um usuário pode emprestar com mais de um livro com o mesmo ISBN ao mesmo tempo
[] - Ao cadastra um empréstimo, será enviado um email automaticamente informando o nome do livro, nome do usuário, CPF, a data de saída e a data de retorno

[] Devolver o livro emprestado
[] - Caso o usuário tenha atrasado, será gerada uma multa fixa de R$ 10,00

[] Mostrar todos os empréstimos pendentes, com o nome do livro, nome do usuário, CPF, data de saída e data de retorno. Ordenados pela data de retorno mais antiga.
