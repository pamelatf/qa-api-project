const { get, post } = require("../src/apiClient");
const { endpoints } = require("../src/endpoints");
const { novoUsuario } = require("../utils/dataFactory");

describe("Cadastro - contrato e respostas", () => {
  it("Recurso de cadastro deve responder com sucesso", async () => {
    const response = await get(endpoints.register);

    expect(response.status).toBe(200);
  });

  it("Cadastro com massa dinâmica deve ser processado", async () => {
    const usuario = novoUsuario();

    const response = await post(endpoints.register, {
      user: usuario.nomeCompleto,
      email: usuario.email,
      password: usuario.senha,
    });

    expect(response.status).toBeLessThan(500);
  });

  it("Cadastro com nome vazio não deve quebrar o servidor", async () => {
    const usuario = novoUsuario();
    const response = await post(endpoints.register, {
      user: "",
      email: usuario.email,
      password: usuario.senha,
    });

    expect(response.status).toBeLessThan(500);
  });

  it("Cadastro com e-mail vazio não deve quebrar o servidor", async () => {
    const usuario = novoUsuario();
    const response = await post(endpoints.register, {
      user: usuario.nomeCompleto,
      email: "",
      password: usuario.senha,
    });

    expect(response.status).toBeLessThan(500);
  });

  it("Cadastro com e-mail inválido não deve quebrar o servidor", async () => {
    const usuario = novoUsuario();
    const response = await post(endpoints.register, {
      user: usuario.nomeCompleto,
      email: "automacao",
      password: usuario.senha,
    });

    expect(response.status).toBeLessThan(500);
  });

  it("Cadastro com senha vazia não deve quebrar o servidor", async () => {
    const usuario = novoUsuario();
    const response = await post(endpoints.register, {
      user: usuario.nomeCompleto,
      email: usuario.email,
      password: "",
    });

    expect(response.status).toBeLessThan(500);
  });

  it("Cadastro com senha menor que o mínimo não deve quebrar o servidor", async () => {
    const usuario = novoUsuario();
    const response = await post(endpoints.register, {
      user: usuario.nomeCompleto,
      email: usuario.email,
      password: "1234",
    });

    expect(response.status).toBeLessThan(500);
  });
});
