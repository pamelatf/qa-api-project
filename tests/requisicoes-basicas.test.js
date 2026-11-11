const { get } = require("../src/apiClient");
const { endpoints } = require("../src/endpoints");

describe("Requisições básicas", () => {
  it("Acessar a home", async () => {
    const response = await get(endpoints.home);
    expect(response.status).toBe(200);
  });

  it("Validar headers da resposta", async () => {
    const response = await get(endpoints.home);
    expect(response.headers["content-type"]).toContain("text/html");
  });

  it("Validar tempo de resposta aceitável", async () => {
    const inicio = Date.now();
    await get(endpoints.home);
    expect(Date.now() - inicio).toBeLessThan(15000);
  });

  it("Validar conteúdo retornado", async () => {
    const response = await get(endpoints.login);
    expect(response.text.length).toBeGreaterThan(0);
  });

  it("Rota inexistente deve retornar erro de cliente", async () => {
    const response = await get("/rota-que-nao-existe-" + Date.now());
    expect(response.status).toBeGreaterThanOrEqual(400);
  });
});
