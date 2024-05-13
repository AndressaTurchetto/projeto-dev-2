/* Às vezes uma informação de acesso - por exemplo, um e-mail - pode ser cadastrada com letras maiúsculas ou minúsculas. Isso pode causar diferenças na validação dessa informação. Na Figura 2 vemos como esses métodos podem resolver esse tipo de problema. */

let email_acesso = "pedro@email.com";

let email_cadastro = "PEDRO@email.com";

if (email_acesso.toLocaleLowerCase() == email_cadastro.toLocaleLowerCase()) {
    console.log("Foi enviado um link de ativação para o seu email");
} else {
    console.log("Esse email não existe em nossa base de dados");
}