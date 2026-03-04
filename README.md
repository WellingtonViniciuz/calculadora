# Conversor Numérico (Calculadora de Bases)

Um aplicativo web simples, elegante e responsivo para conversão instantânea de bases numéricas. Desenvolvido com foco em usabilidade e performance, permitindo que o usuário converta valores entre os sistemas Decimal, Binário, Octal e Hexadecimal de forma intuitiva.

## 🚀 Funcionalidades

* **Conversão Simultânea:** Insira um número em uma base e veja o resultado nas outras três bases instantaneamente.
* **Bases Suportadas:**
  * Decimal (Base 10)
  * Binário (Base 2)
  * Octal (Base 8)
  * Hexadecimal (Base 16)
* **Validação de Entrada:** O sistema alerta o usuário caso o número digitado não seja válido para a base de origem selecionada.
* **Acessibilidade Prática:** Suporte à tecla `Enter` para acionar a conversão de forma rápida, sem depender apenas do clique no botão.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias web fundamentais (Vanilla), sem dependência de bibliotecas ou frameworks externos:

* **HTML5:** Estruturação semântica da aplicação.
* **CSS3:** Estilização responsiva, utilizando Flexbox para alinhamento e design limpo com feedback visual (hover states, focus).
* **JavaScript (ES6):** Lógica de conversão matemática utilizando `parseInt` e `toString`, manipulação do DOM e tratamento de eventos.

## 📁 Estrutura do Projeto

```text
/
├── index.html       # Estrutura principal da página
├── css/
│   └── style.css    # Folha de estilos
└── js/
    └── index.js     # Lógica de conversão e eventos
