function verificarAcesso(perfil) {
  if (perfil === "administrador") {
  console.log("Bem-vindo(a), adminstrador!");
} else if (perfil === "moderador") {
  console.log("Bem-vindo(a), moderador! Você pode gerenciar conteúdo.");
} else {
switch (true) {
  case perfil === "assinante":
    return console.log("Olá, assinante! Você pode gerenciar o conteúdo.");
}
let ofGreater =
  perfil === ""
    ? console.log("Perfil não especificado.")
    : console.log("Acesso negado.");
  }
}