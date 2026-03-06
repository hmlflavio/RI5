export default class Descritor {
    descrever(empresa) {
        console.log(`Razão social: ${empresa.razaoSocial}`);
        console.log(`Nome fantasia: ${empresa.nomeFantasia}`);
        console.log(`cnpj: ${empresa.cnpj}`);
        console.log(`Endereco\nRua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} numero: ${empresa.endereco.numero}`);
        console.log(`funcionários:`);
        
        empresa.funcionarios.forEach(f => {
            console.log(`Nome: ${f.nome}`);
            console.log(`matricula: ${f.matricula}`);
            console.log(`cpf: ${f.cpf}`);
            console.log(`Endereco\nRua: ${f.endereco.rua} Bairro: ${f.endereco.bairro} Cidade: ${f.endereco.cidade} numero: ${f.endereco.numero}`);
        });
    }
}