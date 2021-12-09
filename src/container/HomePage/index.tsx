import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import {
  Footer,
  Header,
  MainContainer,
  SEO,
  Field,
  Box,
  Form,
} from '../../components';
import { Icons, Masks } from '../../domain';
import { GridLayout } from '../../styles/layout';
import { SiteConfig } from '../../config/sinte-config';

import core from '../../services/Core';
import { unmakedCurrency, unmakedPercent } from '../../utils/masks';

export type FieldsData<T> = {
  legend: string;
  fields: {
    name: string;
    label: string;
    value: string;
    disabled?: boolean;
    icon?: Icons;
    mask: Masks;
    maxLength?: number;
    fn: Dispatch<SetStateAction<T>>;
  }[];
};

export default function HomePage() {
  const [ganhoMensal, setGanhoMensal] = useState('');
  const [investimentoMensal, setInvestimentoMensal] = useState('');
  const [rentabilidade, setRentabilidade] = useState('');
  const [anosAposentadoria, setAnosAposentadoria] = useState('');
  const [temInvestido, setTemInvestido] = useState('');
  const [primeiroMilhao, setPrimeiroMilhao] = useState('');
  const [aposentaCom, setAposentaCom] = useState('');
  const [anosViverAposentado, setAnosViverAposentado] = useState('');
  const [maximoTorrar, setMaximoTorrar] = useState('');
  const [gastosVelhota, setGastosVelhota] = useState('');
  const [quantosAnosRico, setQuantosAnosRico] = useState('');
  const [quantoQuerAposentar, setQuantoQuerAposentar] = useState('');
  const [quantoTempoAposentadoria, setQuantoTempoAposentadoria] = useState('');
  const [rentabilidadeAnual, setRentabilidadeAnual] = useState('');
  const [quantoJaInvestido, setQuantoJaInvestido] = useState('');
  const [quantoDeveraInvestir, setQuantoDeveraInvestir] = useState('');
  const [quantosAnosAposentado, setQuantosAnosAposentado] = useState('');
  const [quantoGastarAposentado, setQuantoGastarAposentado] = useState('');
  const [quantoHerancaDeixar, setQuantoHerancaDeixar] = useState('');

  const planejamentoPresente: FieldsData<string> = {
    legend: 'Planejamento Presente',
    fields: [
      {
        label: 'Quanto você ganha por mês?',
        name: 'ganhoMensal',
        value: ganhoMensal,
        fn: setGanhoMensal,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: '% da sua renda que você investe?',
        name: 'investimentoMensal',
        value: investimentoMensal,
        fn: setInvestimentoMensal,
        icon: Icons.percent,
        mask: 'percent',
        maxLength: 6,
      },
      {
        label: 'Sua rentabilidade total anual projetada:',
        name: 'rentabilidade',
        value: rentabilidade,
        fn: setRentabilidade,
        icon: Icons.percent,
        mask: 'percent',
        maxLength: 6,
      },
      {
        label: 'Quantos anos vai investir até a aposentadoria?',
        name: 'anosAposentadoria',
        value: anosAposentadoria,
        fn: setAnosAposentadoria,
        mask: 'years',
        maxLength: 3,
      },
      {
        label: 'Quanto você já têm investido?',
        name: 'temInvestido',
        value: temInvestido,
        fn: setTemInvestido,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Você alcançará seu primeiro milhão em:',
        name: 'primeiroMilhao',
        value: primeiroMilhao,
        fn: setPrimeiroMilhao,
        disabled: true,
        mask: 'years',
        maxLength: 3,
      },
      {
        label: 'Você se aposentará com:',
        name: 'aposentaCom',
        value: aposentaCom,
        fn: setAposentaCom,
        disabled: true,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quantos anos quer viver aposentado?',
        name: 'anosViverAposentado',
        value: anosViverAposentado,
        fn: setAnosViverAposentado,
        mask: 'years',
        maxLength: 3,
      },
      {
        label: 'Poderá torrar por mês no máximo:',
        name: 'maximoTorrar',
        value: maximoTorrar,
        fn: setMaximoTorrar,
        disabled: true,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Insira os gastos mensais do velhota:',
        name: 'gastosVelhota',
        value: gastosVelhota,
        fn: setGastosVelhota,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quantos anos vivendo como aposentado rico?',
        name: 'quantosAnosRico',
        value: quantosAnosRico,
        fn: setQuantosAnosRico,
        disabled: true,
        mask: 'years',
        maxLength: 3,
      },
    ],
  };

  const planejamentoFuturo: FieldsData<string> = {
    legend: 'Planejamento Futuro',
    fields: [
      {
        label: 'Com quanto você quer se aposentar?',
        name: 'quantoQuerAposentar',
        value: quantoQuerAposentar,
        fn: setQuantoQuerAposentar,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quanto tempo você têm até a aposentadoria',
        name: 'quantoTempoAposentadoria',
        value: quantoTempoAposentadoria,
        fn: setQuantoTempoAposentadoria,
        mask: 'years',
        maxLength: 3,
      },
      {
        label: 'Sua rentabilidade total anual projetada?',
        name: 'rentabilidadeAnual',
        value: rentabilidadeAnual,
        fn: setRentabilidadeAnual,
        icon: Icons.percent,
        mask: 'percent',
        maxLength: 6,
      },
      {
        label: 'Quanto você já têm investido?',
        name: 'quantoJaInvestido',
        value: quantoJaInvestido,
        fn: setQuantoJaInvestido,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quanto você deverá investir por mês:',
        name: 'quantoDeveraInvestir',
        value: quantoDeveraInvestir,
        fn: setQuantoDeveraInvestir,
        disabled: true,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quantos anos você pretende viver aposentado?',
        name: 'quantosAnosAposentado',
        value: quantosAnosAposentado,
        fn: setQuantosAnosAposentado,
        mask: 'years',
        maxLength: 3,
      },
      {
        label: 'Quanto você quer gastar por mês aposentado?',
        name: 'quantoGastarAposentado',
        value: quantoGastarAposentado,
        fn: setQuantoGastarAposentado,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quanto de herança você vai deixar:',
        name: 'quantoHerancaDeixar',
        value: quantoHerancaDeixar,
        fn: setQuantoHerancaDeixar,
        disabled: true,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
    ],
  };

  useEffect(() => {
    const newGanhoMensal = unmakedCurrency(ganhoMensal);
    const newInvestimentoMensal = unmakedPercent(investimentoMensal) / 100;
    const newRentabilidade = unmakedPercent(rentabilidade) / 100;
    const newTemInvestido = unmakedCurrency(temInvestido);
    const newAnosAposentadoria = Number(anosAposentadoria);

    const numeroAnos = core.calculaAnosPrimeiroMilhao(
      newGanhoMensal,
      newInvestimentoMensal,
      newRentabilidade,
      newTemInvestido,
    );

    const valorFinal = core.calculaSeAposentarCom(
      newGanhoMensal,
      newRentabilidade,
      newAnosAposentadoria,
      newInvestimentoMensal,
      newTemInvestido,
    );

    setPrimeiroMilhao(numeroAnos);
    setAposentaCom(valorFinal);
  }, [
    ganhoMensal,
    investimentoMensal,
    rentabilidade,
    temInvestido,
    anosAposentadoria,
  ]);

  useEffect(() => {
    const newRentabilidade = unmakedPercent(rentabilidade) / 100;
    const newAnosViverAposentados = Number(anosViverAposentado);
    const newAposentarCom = unmakedCurrency(aposentaCom);
    const newGastosVelhota = unmakedCurrency(gastosVelhota);

    const maximoTorrar = core.calculaPoderaTorrar(
      newRentabilidade,
      newAnosViverAposentados,
      newAposentarCom,
    );

    const anosRicos = core.calcularAnosViverAposentado(
      newRentabilidade,
      newGastosVelhota,
      newAposentarCom,
    );

    setMaximoTorrar(maximoTorrar);
    setQuantosAnosRico(anosRicos);
  }, [rentabilidade, anosViverAposentado, aposentaCom, gastosVelhota]);

  useEffect(() => {
    const newQuantoQuerAposentar = unmakedCurrency(quantoQuerAposentar);
    const newQuantoTempoAposentadoria = Number(quantoTempoAposentadoria);
    const newRentabilidadeAnual = unmakedPercent(rentabilidadeAnual) / 100;
    const newQuantoJaInvestido = unmakedCurrency(quantoJaInvestido) * -1;
    const newQuantosAnosAposentado = Number(quantosAnosAposentado);
    const newQuantoGastarAposentado = unmakedCurrency(quantoGastarAposentado);

    const valorParaInvestir = core.calculaQuantoDeveraInvestir(
      newQuantoQuerAposentar,
      newQuantoTempoAposentadoria,
      newRentabilidadeAnual,
      newQuantoJaInvestido,
    );

    const valorHeranca = core.calculaQuantoHerancaDeixar(
      newRentabilidadeAnual,
      newQuantosAnosAposentado,
      newQuantoQuerAposentar,
      newQuantoGastarAposentado,
    );

    setQuantoDeveraInvestir(valorParaInvestir);
    setQuantoHerancaDeixar(valorHeranca);
  }, [
    quantoQuerAposentar,
    quantoTempoAposentadoria,
    rentabilidadeAnual,
    quantoJaInvestido,
    quantosAnosAposentado,
    quantoGastarAposentado,
  ]);

  return (
    <>
      <SEO title={SiteConfig.SITE_NAME} />
      <Header />
      <MainContainer>
        <Box marginTop="-12rem">
          <Form legend={planejamentoPresente.legend}>
            <GridLayout>
              {planejamentoPresente.fields.map((field, i) => (
                <Field
                  key={i}
                  maxLength={field.maxLength}
                  mask={field.mask}
                  icon={field.icon}
                  disabled={field.disabled || false}
                  label={field.label}
                  name={field.name}
                  setValue={field.fn}
                  value={field.value}
                />
              ))}
            </GridLayout>
          </Form>
        </Box>

        <Box marginBlock="12rem">
          <Form legend={planejamentoFuturo.legend}>
            <GridLayout>
              {planejamentoFuturo.fields.map((field, i) => (
                <Field
                  key={i}
                  maxLength={field.maxLength}
                  mask={field.mask}
                  icon={field.icon}
                  disabled={field.disabled || false}
                  label={field.label}
                  name={field.name}
                  setValue={field.fn}
                  value={field.value}
                />
              ))}
            </GridLayout>
          </Form>
        </Box>
      </MainContainer>
      <Footer />
    </>
  );
}
