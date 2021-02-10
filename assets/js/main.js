function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    iniciarCalculadora() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizarConta();
        }
      });
    },

    limparValorDisplay() {
      this.display.value = "";
    },

    mostrarBtnNoDisplay(valorEl) {
      this.display.value += valorEl;
    },

    limparUltimoDigito() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizarConta() {
      const valorDaContaNoDisplay = this.display.value;
      const valorFinalConta = eval(valorDaContaNoDisplay);

      this.display.value = valorFinalConta;
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.mostrarBtnNoDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.limparValorDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.limparUltimoDigito();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizarConta();
        }
      });
    },
  };
}

const calculadora = criaCalculadora();
calculadora.iniciarCalculadora();
