# qa-api-project

Projeto de testes automatizados de **API REST** com Jest + Supertest, gerado pelo QA Portfolio Builder (Qazando).
Aplicação sob teste: [https://automationpratice.com.br](https://automationpratice.com.br)

## Tecnologias

- Jest
- Supertest
- @faker-js/faker
- GitHub Actions (CI/CD)

## Pré-requisitos

- Node.js 20+

## Instalação

```bash
npm install
```

## Executar os testes

```bash
npm test
```

## Estrutura

```text
src/         # client HTTP e endpoints
tests/       # cenários (login, cadastro, requisições básicas)
utils/       # data factory com Faker
```

## Cenários cobertos

Mesmos cenários do projeto de referência (login e cadastro, positivos e negativos) traduzidos para a camada de API, além de requisições básicas e validação de headers/status.

## CI/CD

Workflow `.github/workflows/api.yml` executa a suíte a cada push e pull request.

_Nível do projeto: intermediate_
