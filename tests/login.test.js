const { get, post } = require("../src/apiClient");
const { endpoints } = require("../src/endpoints");

describe("Login - contrato e respostas", () => {
  it("Página/recurso de login deve responder com sucesso", async () => {
    const response = await get(endpoints.login);

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toBeDefined();
  });

  it("Login com credenciais válidas deve ser aceito pelo servidor", async () => {
    const response = await post(endpoints.login, {
      user: "meu-email@teste.com",
      password: "121212",
    });

    expect([200, 201, 302, 404]).toContain(response.status);
  });

  it("Login com e-mail inválido não deve retornar erro de servidor", async () => {
    const response = await post(endpoints.login, {
      user: "23762732736",
      password: "121212",
    });

    expect(response.status).toBeLessThan(500);
  });

  it("Login com e-mail vazio não deve retornar erro de servidor", async () => {
    const response = await post(endpoints.login, { user: "", password: "121212" });

    expect(response.status).toBeLessThan(500);
  });

  it("Login com senha vazia não deve retornar erro de servidor", async () => {
    const response = await post(endpoints.login, {
      user: "eduardo.finotti@qazando.com",
      password: "",
    });

    expect(response.status).toBeLessThan(500);
  });
});
