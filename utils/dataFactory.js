const { faker } = require("@faker-js/faker");

function novoUsuario(passwordLength = 8) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    nomeCompleto: `${firstName} ${lastName}`,
    email: faker.internet.email({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      provider: "gmail.com",
    }),
    senha: faker.internet.password({ length: passwordLength }),
  };
}

module.exports = { novoUsuario };
