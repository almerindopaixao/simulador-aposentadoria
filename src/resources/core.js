const mesesAno = 12;

/*Insere mascaras nos inputs de dinheiro, ao iniciar a tela*/
$(function () {
  $('#ganhoMensal').maskMoney();
  $('#temInvestido').maskMoney();
  $('#aposentaCom').maskMoney();
  $('#maximoTorrar').maskMoney();
  $('#gastosVelhota').maskMoney();
  $('#quantoQuerAposentar').maskMoney();
  $('#quantoJaInvestido').maskMoney();
  $('#quantoDeveraInvestir').maskMoney();
  $('#quantoGastarAposentado').maskMoney();
  $('#quantoHerancaDeixar').maskMoney();
});

/*Inicio Calculos coluna da esquerda*/
function fazerCalculos() {
  calculaAnosPrimeiroMilhao();
  calculaSeAposentarCom();
  calculaPoderaTorrar();
  calcularAnosViverAposentado();
}

function calculaAnosPrimeiroMilhao() {
  let ganhoMensal = $('#ganhoMensal').maskMoney('unmasked')[0];
  let investimentoMensal =
    document.querySelector('#investimentoMensal').value / 100;
  let rentabilidade = document.querySelector('#rentabilidade').value / 100;
  let temInvestido = $('#temInvestido').maskMoney('unmasked')[0];
  let numeroAnos = NPER(
    rentabilidade,
    -1 * ganhoMensal * investimentoMensal * mesesAno,
    -1 * temInvestido,
    1000000,
  );

  if (numeroAnos)
    document.querySelector('#primeiroMilhao').value = numeroAnos.toFixed(1);
}

function calculaSeAposentarCom() {
  let ganhoMensal = $('#ganhoMensal').maskMoney('unmasked')[0];
  let rentabilidade = document.querySelector('#rentabilidade').value / 100;
  let anosAposentadoria = document.querySelector('#anosAposentadoria').value;
  let investimentoMensal =
    document.querySelector('#investimentoMensal').value / 100;
  let temInvestido = $('#temInvestido').maskMoney('unmasked')[0];

  let valorFinal = FV(
    rentabilidade,
    anosAposentadoria,
    -(ganhoMensal * investimentoMensal * mesesAno),
    -temInvestido,
    0,
  );
  if (valorFinal) {
    document.querySelector('#aposentaCom').value = valorFinal;
    $('#aposentaCom').maskMoney('mask', valorFinal);
  }
}

function calculaPoderaTorrar() {
  let rentabilidade = document.querySelector('#rentabilidade').value / 100;
  let anosViverAposentados = document.querySelector(
    '#anosViverAposentado',
  ).value;
  let aposentaCom = $('#aposentaCom').maskMoney('unmasked')[0];

  let maximoTorrar =
    PMT(rentabilidade, anosViverAposentados, aposentaCom) / mesesAno;

  if (maximoTorrar && maximoTorrar < Infinity) {
    document.querySelector('#maximoTorrar').value = maximoTorrar.toFixed(2);
    $('#maximoTorrar').maskMoney('mask', maximoTorrar.toFixed(2));
  }
}

function calcularAnosViverAposentado() {
  let rentabilidade = document.querySelector('#rentabilidade').value / 100;
  let gastosVelhota = $('#gastosVelhota').maskMoney('unmasked')[0];
  let aposentaCom = $('#aposentaCom').maskMoney('unmasked')[0];

  let numeroAnosAposentado = NPER(
    rentabilidade,
    gastosVelhota * mesesAno,
    -1 * aposentaCom,
  );

  if (numeroAnosAposentado && numeroAnosAposentado * -1 < Infinity) {
    document.querySelector('#quantosAnosRico').value =
      numeroAnosAposentado.toFixed(1);
  } else {
    document.querySelector('#quantosAnosRico').value =
      'Parabéns! Seu dinheiro não acabará!';
  }
}
/*Fim calculos coluna da esquerda */

/* Inicio calculos coluna da direita*/

function fazerCalculoDireita() {
  calculaQuantoDeveraInvestir();
  calculaQuantoHerancaDeixar();
}

function calculaQuantoDeveraInvestir() {
  let quantoQuerAposentar = $('#quantoQuerAposentar').maskMoney('unmasked')[0];
  let quantoTempoAposentadoria = document.querySelector(
    '#quantoTempoAposentadoria',
  ).value;
  let rentabilidadeAnual =
    document.querySelector('#rentabilidadeAnual').value / 100;
  let quantoJaInvestido = $('#quantoJaInvestido').maskMoney('unmasked')[0] * -1;

  let quantoDeveraInvestir =
    (PMT2(
      rentabilidadeAnual,
      quantoTempoAposentadoria,
      quantoJaInvestido,
      quantoQuerAposentar,
    ) /
      12) *
    -1;

  if (quantoDeveraInvestir) {
    document.querySelector('#quantoDeveraInvestir').value =
      quantoDeveraInvestir.toFixed(2);
    $('#quantoDeveraInvestir').maskMoney(
      'mask',
      quantoDeveraInvestir.toFixed(2),
    );
  }
}

function calculaQuantoHerancaDeixar() {
  let rentabilidadeAnual =
    document.querySelector('#rentabilidadeAnual').value / 100;
  let quantosAnosAposentado = document.querySelector(
    '#quantosAnosAposentado',
  ).value;
  let quantoQuerAposentar = $('#quantoQuerAposentar').maskMoney('unmasked')[0];
  let quantoGastarAposentado = $('#quantoGastarAposentado').maskMoney(
    'unmasked',
  )[0];

  let pmt = eval(
    '(rentabilidadeAnual*quantoQuerAposentar/12) - (quantoGastarAposentado*12)',
  );

  let valorFinal = 0;
  valorFinal = FV(
    rentabilidadeAnual,
    quantosAnosAposentado,
    -pmt,
    -quantoQuerAposentar,
    0,
  );

  if (valorFinal && valorFinal > 0) {
    document.querySelector('#quantoHerancaDeixar').value = valorFinal;
    $('#quantoHerancaDeixar').maskMoney('mask', valorFinal);
  } else {
    document.querySelector('#quantoHerancaDeixar').value =
      'Você não deixara herança';
  }
}

/*Fim calculos coluna da direita */

function imprimirJanela() {
  window.print();
}

/*
console.log(eval('(0.05*10000/12)-(100*12)'))
console.log(FV(0.05,5,(1158.3333333333333),-(10000),0));


console.log(NPER(0.1,(-1)*1000*0.5*12,(-1)*0,1000000));

console.log(PMT(0.1,20,12600)/12);

*/
