# Demo — QA-First in the Age of AI

Código de demonstração para a talk **Spec-Driven Development: QA-First in the Age of AI**.

## Estrutura

```
spec/cart.spec.md   ← 1. Spec escrita primeiro (o contrato)
src/cart.js         ← 2. Implementação que satisfaz a spec
tests/cart.test.js  ← 3. Testes derivados da spec (todos passam ✅)
broken/cart.js      ← 4. Refactor descuidado → testes falham ❌ → PR bloqueado
```

## Pré-requisitos

- Node.js 18+

---

## Passo a Passo da Demo

### 1. Mostrar a Spec

Abra `spec/cart.spec.md` e apresente as regras de negócio:

- Cada item tem nome, preço unitário (BRL) e quantidade ≥ 1
- Total = soma de (preço × quantidade) de todos os itens
- Desconto de **10%** quando o total ultrapassar **R$ 100,00**
- Quantidade menor que 1 lança um erro
- Carrinho vazio retorna R$ 0,00

> **Ponto de fala:** *"Este é o contrato. Nada foi codado ainda."*

---

### 2. Mostrar os Testes

Abra `tests/cart.test.js` e mostre que cada `test()` mapeia diretamente uma regra da spec:

| Regra da spec | Teste correspondente |
|---|---|
| Carrinho vazio → R$ 0,00 | `empty cart totals R$ 0.00` |
| Item abaixo do threshold | `single item below discount threshold` |
| Desconto de 10% acima de R$ 100 | `applies 10% discount when total exceeds R$ 100` |
| Quantidade inválida lança erro | `throws error when quantity is less than 1` |

> **Ponto de fala:** *"QA não inventou nada. Cada teste veio de uma regra da spec."*

---

### 3. Rodar com o código correto — tudo passa ✅

```bash
cd talks/qa-first-in-the-age-of-ai/examples
npm install   # apenas na primeira execução
npm test
```

Resultado esperado: **5 testes passando.**

```
PASS tests/cart.test.js
  Cart
    ✓ empty cart totals R$ 0.00
    ✓ single item below discount threshold
    ✓ multiple items below discount threshold
    ✓ applies 10% discount when total exceeds R$ 100
    ✓ throws error when quantity is less than 1

Tests: 5 passed, 5 total
```

---

### 4. Simular o refactor quebrado — testes falham ❌

Substitua `src/cart.js` pelo arquivo com os bugs:

```bash
cp broken/cart.js src/cart.js
npm test
```

2 testes falham. O `broken/cart.js` tem dois bugs deliberados:

| O que mudou | Spec diz | Versão quebrada |
|---|---|---|
| Threshold do desconto | R$ 100,00 | R$ 200,00 |
| Taxa do desconto | 10% | 5% |

> **Ponto de fala:** *"Um dev fez um refactor, abriu o PR — e a spec pegou. Sem os testes, isso ia pra produção."*

---

### 5. Restaurar o código original

```bash
git restore src/cart.js
```

---

## Mensagem Final

A spec foi escrita antes do código. Os testes derivaram da spec. O código errado foi barrado automaticamente — sem opinião, só contrato.
