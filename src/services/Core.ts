import { NPER, FV, PMT, PMT2 } from '../utils/calculations';
import { currency } from '../utils/masks';

class Core {
  private mesesAno = 12;

  public calculaAnosPrimeiroMilhao(
    ganhoMensal: number,
    investimentoMensal: number,
    rentabilidade: number,
    temInvestido: number,
  ): string {
    const numeroAnos = NPER(
      rentabilidade,
      -1 * ganhoMensal * investimentoMensal * this.mesesAno,
      -1 * temInvestido,
      1000000,
    );

    const msg =
      isNaN(numeroAnos) || !isFinite(numeroAnos) ? '' : numeroAnos.toFixed(1);

    return msg;
  }

  public calculaSeAposentarCom(
    ganhoMensal: number,
    rentabilidade: number,
    anosAposentadoria: number,
    investimentoMensal: number,
    temInvestido: number,
  ): string {
    const valorFinal = FV(
      rentabilidade,
      anosAposentadoria,
      -(ganhoMensal * investimentoMensal * this.mesesAno),
      -temInvestido,
      0,
    );

    return valorFinal ? currency(valorFinal.toFixed(2)) : '';
  }

  public calculaPoderaTorrar(
    rentabilidade: number,
    anosViverAposentados: number,
    aposentaCom: number,
  ): string {
    const maximoTorrar =
      PMT(rentabilidade, anosViverAposentados, aposentaCom) / this.mesesAno;

    const maximoTorrarIsInValid =
      isNaN(maximoTorrar) || !isFinite(maximoTorrar);

    const newMaximoTorrar = currency(maximoTorrar.toFixed(2));

    return maximoTorrarIsInValid ? '' : newMaximoTorrar;
  }

  public calcularAnosViverAposentado(
    rentabilidade: number,
    gastosVelhota: number,
    aposentaCom: number,
  ): string {
    const numeroAnosAposentado = NPER(
      rentabilidade,
      gastosVelhota * this.mesesAno,
      -1 * aposentaCom,
    );

    const numeroAnosAposentadoIsInvalid =
      isNaN(numeroAnosAposentado) || !isFinite(numeroAnosAposentado * -1);

    return numeroAnosAposentadoIsInvalid
      ? 'Seu dinheiro não acabará'
      : numeroAnosAposentado.toFixed(1);
  }

  public calculaQuantoDeveraInvestir(
    quantoQuerAposentar: number,
    quantoTempoAposentadoria: number,
    rentabilidadeAnual: number,
    quantoJaInvestido: number,
  ): string {
    const quantoDeveraInvestir =
      (PMT2(
        rentabilidadeAnual,
        quantoTempoAposentadoria,
        quantoJaInvestido,
        quantoQuerAposentar,
      ) /
        12) *
      -1;

    return quantoDeveraInvestir
      ? currency(quantoDeveraInvestir.toFixed(2))
      : '';
  }

  public calculaQuantoHerancaDeixar(
    rentabilidadeAnual: number,
    quantosAnosAposentado: number,
    quantoQuerAposentar: number,
    quantoGastarAposentado: number,
  ): string {
    const pmt =
      (rentabilidadeAnual * quantoQuerAposentar) / 12 -
      quantoGastarAposentado * 12;

    const valorFinal = FV(
      rentabilidadeAnual,
      quantosAnosAposentado,
      -pmt,
      -quantoQuerAposentar,
      0,
    );

    return valorFinal && valorFinal > 0
      ? currency(valorFinal.toFixed(2))
      : 'Você não deixará herança';
  }
}

export default new Core();
