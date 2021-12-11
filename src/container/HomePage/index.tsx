import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import {
  Footer,
  Header,
  MainContainer,
  SEO,
  Field,
  Box,
  Form,
  Content,
  Typography,
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
        label: 'Insira os gastos mensais da velhota:',
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
      <SEO
        title={SiteConfig.SITE_TITLE}
        description={SiteConfig.SITE_DESCRIPTION}
        author="Almerindo Paixão"
        type="website"
        siteName={SiteConfig.SITE_NAME}
        url={SiteConfig.SITE_URL}
        keywords="Simulador, Aposentadoria, Finanças, Economizar, Dinheiro"
      />
      <Header>
        <div>
          <p>{SiteConfig.SITE_DESCRIPTION}</p>
        </div>
      </Header>
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

        <Content>
          <Typography component="h2">
            Como utilizar o simulador de aposentadoria
          </Typography>

          <ol>
            <li>
              Preencha os campos da seção <strong>planejamento presente</strong>
              ;
            </li>

            <li>Verifique se a formatação dos campos está correta;</li>

            <li>
              Preencha os campos da seção <strong>planejamento futuro</strong>;
            </li>

            <li>Verifique se a formatação dos campos está correta;</li>

            <li>Os resultados são calculados automaticamente;</li>
          </ol>

          <Typography component="p">
            Viu como é simples? Agora é só fazer suas simulações utilizando
            nosso simulador de aposentadoria.
          </Typography>
        </Content>

        <Content marginBlock="8rem">
          <Typography component="h2">
            O que fazer para montar uma aposentadoria
          </Typography>

          <Typography component="p">
            A segurança financeira na aposentadoria não acontece simplesmente. É
            preciso planejamento, comprometimento e, sim, dinheiro.
          </Typography>

          <Typography component="h3">
            1. Comece a economizar, continue poupando e cumpra seus objetivos
          </Typography>

          <Typography component="p">
            Se você já está economizando, seja para a aposentadoria ou outro
            objetivo, continue! Você sabe que economizar é um hábito
            gratificante. Se você não está economizando, é hora de iniciar.
            Comece pequeno se for necessário e tente aumentar a quantia que você
            economiza a cada mês. Quanto mais cedo você começar economizando,
            mais tempo seu dinheiro terá para crescer. Elabore um plano,
            cumpra-o e estabeleça metas. Lembre-se, nunca é muito cedo ou muito
            tarde para começar a montar sua aposentadoria.
          </Typography>

          <Typography component="h3">2. Conheça suas necessidades</Typography>

          <Typography component="p">
            A aposentadoria é cara. Especialistas estimam que você vai precisar
            de 70 a 90 por cento de sua renda atual para manter seu padrão de
            vida quando você parar de trabalhar.{' '}
            <strong>Assuma o controle de seu futuro financeiro.</strong> A chave
            para uma aposentadoria segura é planejar com antecedência.
          </Typography>

          <Typography component="h3">
            3. Considere os princípios básicos de investimento
          </Typography>

          <Typography component="p">
            Inflação e os diversos tipos de investimentos desempenham papéis
            importantes em quanto você terá economizado na aposentadoria.
            Coloque suas economias em diferentes tipos de investimentos. Ao
            diversificar desta forma, você é mais propenso a reduzir o risco e
            melhorar o retorno. Sua combinação de investimentos pode mudar com o
            tempo dependendo de uma série de fatores, como a sua idade,
            objetivos e circunstâncias financeiras. Financeiro segurança e
            conhecimento andam de mãos dadas.
          </Typography>
        </Content>

        <Content marginBottom="12rem">
          <Typography component="h2">
            Melhores investimentos para a aposentadoria
          </Typography>

          <Typography component="p">
            Para ter uma aposentadoria confortável, segura e divertida, você
            precisa construir o colchão financeiro que vai custear tudo. Para
            isso, é necessário que você conheça aplicações que ofereçam mais
            segurança e rentabilidade para o seu tão suado dinheirinho. Então
            confira quais são os melhores investimentos para a sua
            aposentadoria:
          </Typography>

          <Typography component="h3">1. Tesouro IPCA</Typography>

          <Typography component="p">
            O{' '}
            <a
              href="https://www.tesourodireto.com.br/como-investir/aprenda-a-investir/e-books.htm"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Tesouro Direto
            </a>{' '}
            é um título público que faz parte de um programa do Tesouro Nacional
            desenvolvido em parceria com a B3 (BM&FBovespa), a fim de facilitar
            o acesso de todos os tipos de investidores aos títulos públicos
            federais.
          </Typography>

          <Typography component="p">
            Um investimento para aposentadoria precisa ser feito levando em
            conta o futuro. Então, os títulos mais adequados para essa ocasião
            são os de longo prazo, como por exemplo o{' '}
            <a
              href="https://www.modalmais.com.br/blog/tesouro-ipca"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Tesouro IPCA
            </a>{' '}
            .
          </Typography>

          <Typography component="p">
            Este título é pós-fixado e o seu rendimento varia de acordo com a
            soma da taxa de juros prefixada e a variação da{' '}
            <a
              href="https://www.bcb.gov.br/controleinflacao/oqueinflacao"
              target="_blank"
              rel="nofollow noreferrer"
            >
              inflação
            </a>{' '}
            durante o período medida pelo Índice de Preços ao Consumidor Amplo
            (IPCA).
          </Typography>

          <Typography component="h3">2. Previdência Privada</Typography>

          <Typography component="p">
            O sistema de previdência complementar é composto de{' '}
            <strong>fundos de investimentos</strong> constituídos especialmente
            para oferecer uma garantia adicional de renda ao trabalhador durante
            a aposentadoria. Muitas vezes, a participação nesse tipo de
            investimento é fechada para funcionários de empresas, nos conhecidos
            fundos de pensão, mas existem opções abertas a qualquer interessado.
          </Typography>

          <Typography component="p">
            Os pagamentos podem ser mensais ou de uma só vez e ainda pode fazer
            contribuições adicionais sempre que tiver uma grana sobrando.
            Lembre-se que quanto mais você investir e em maior tempo, mais seu
            dinheiro cresce.
          </Typography>

          <Typography component="h3">3. Fundos de Investimento</Typography>

          <Typography component="p">
            Os fundos de investimento são produtos de investimento criados com o
            único propósito de reunir o capital dos investidores e investi-lo
            coletivamente por meio de uma carteira de instrumentos financeiros,
            como ações, títulos e outras aplicações. Um fundo de investimento
            oferece uma seleção mais ampla de oportunidades de investimento,
            maior experiência em gestão e taxas de investimento mais baixas do
            que os investidores poderiam obter por conta própria.
          </Typography>
        </Content>
      </MainContainer>
      <Footer />
    </>
  );
}
