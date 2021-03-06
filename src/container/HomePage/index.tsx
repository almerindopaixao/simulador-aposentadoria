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
        label: 'Quanto voc?? ganha por m??s?',
        name: 'ganhoMensal',
        value: ganhoMensal,
        fn: setGanhoMensal,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: '% da sua renda que voc?? investe?',
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
        label: 'Quantos anos vai investir at?? a aposentadoria?',
        name: 'anosAposentadoria',
        value: anosAposentadoria,
        fn: setAnosAposentadoria,
        mask: 'years',
        maxLength: 3,
      },
      {
        label: 'Quanto voc?? j?? t??m investido?',
        name: 'temInvestido',
        value: temInvestido,
        fn: setTemInvestido,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Voc?? alcan??ar?? seu primeiro milh??o em:',
        name: 'primeiroMilhao',
        value: primeiroMilhao,
        fn: setPrimeiroMilhao,
        disabled: true,
        mask: 'years',
        maxLength: 3,
      },
      {
        label: 'Voc?? se aposentar?? com:',
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
        label: 'Poder?? torrar por m??s no m??ximo:',
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
        label: 'Com quanto voc?? quer se aposentar?',
        name: 'quantoQuerAposentar',
        value: quantoQuerAposentar,
        fn: setQuantoQuerAposentar,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quanto tempo voc?? t??m at?? a aposentadoria',
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
        label: 'Quanto voc?? j?? t??m investido?',
        name: 'quantoJaInvestido',
        value: quantoJaInvestido,
        fn: setQuantoJaInvestido,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quanto voc?? dever?? investir por m??s:',
        name: 'quantoDeveraInvestir',
        value: quantoDeveraInvestir,
        fn: setQuantoDeveraInvestir,
        disabled: true,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quantos anos voc?? pretende viver aposentado?',
        name: 'quantosAnosAposentado',
        value: quantosAnosAposentado,
        fn: setQuantosAnosAposentado,
        mask: 'years',
        maxLength: 3,
      },
      {
        label: 'Quanto voc?? quer gastar por m??s aposentado?',
        name: 'quantoGastarAposentado',
        value: quantoGastarAposentado,
        fn: setQuantoGastarAposentado,
        icon: Icons.money,
        mask: 'currency',
        maxLength: 20,
      },
      {
        label: 'Quanto de heran??a voc?? vai deixar:',
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
        author="Almerindo Paix??o"
        type="website"
        siteName={SiteConfig.SITE_NAME}
        url={SiteConfig.SITE_URL}
        keywords="Simulador, Aposentadoria, Finan??as, Economizar, Dinheiro"
        image_default={`${SiteConfig.SITE_URL}/banner.png`}
        image_small={`${SiteConfig.SITE_URL}/banner_small.png`}
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
              Preencha os campos da se????o <strong>planejamento presente</strong>
              ;
            </li>

            <li>Verifique se a formata????o dos campos est?? correta;</li>

            <li>
              Preencha os campos da se????o <strong>planejamento futuro</strong>;
            </li>

            <li>Verifique se a formata????o dos campos est?? correta;</li>

            <li>Os resultados s??o calculados automaticamente;</li>
          </ol>

          <Typography component="p">
            Viu como ?? simples? Agora ?? s?? fazer suas simula????es utilizando
            nosso simulador de aposentadoria.
          </Typography>
        </Content>

        <Content marginBlock="8rem">
          <Typography component="h2">
            O que fazer para montar uma aposentadoria
          </Typography>

          <Typography component="p">
            A seguran??a financeira na aposentadoria n??o acontece simplesmente. ??
            preciso planejamento, comprometimento e, sim, dinheiro.
          </Typography>

          <Typography component="h3">
            1. Comece a economizar, continue poupando e cumpra seus objetivos
          </Typography>

          <Typography component="p">
            Se voc?? j?? est?? economizando, seja para a aposentadoria ou outro
            objetivo, continue! Voc?? sabe que economizar ?? um h??bito
            gratificante. Se voc?? n??o est?? economizando, ?? hora de iniciar.
            Comece pequeno se for necess??rio e tente aumentar a quantia que voc??
            economiza a cada m??s. Quanto mais cedo voc?? come??ar economizando,
            mais tempo seu dinheiro ter?? para crescer. Elabore um plano,
            cumpra-o e estabele??a metas. Lembre-se, nunca ?? muito cedo ou muito
            tarde para come??ar a montar sua aposentadoria.
          </Typography>

          <Typography component="h3">2. Conhe??a suas necessidades</Typography>

          <Typography component="p">
            A aposentadoria ?? cara. Especialistas estimam que voc?? vai precisar
            de 70 a 90 por cento de sua renda atual para manter seu padr??o de
            vida quando voc?? parar de trabalhar.{' '}
            <strong>Assuma o controle de seu futuro financeiro.</strong> A chave
            para uma aposentadoria segura ?? planejar com anteced??ncia.
          </Typography>

          <Typography component="h3">
            3. Considere os princ??pios b??sicos de investimento
          </Typography>

          <Typography component="p">
            Infla????o e os diversos tipos de investimentos desempenham pap??is
            importantes em quanto voc?? ter?? economizado na aposentadoria.
            Coloque suas economias em diferentes tipos de investimentos. Ao
            diversificar desta forma, voc?? ?? mais propenso a reduzir o risco e
            melhorar o retorno. Sua combina????o de investimentos pode mudar com o
            tempo dependendo de uma s??rie de fatores, como a sua idade,
            objetivos e circunst??ncias financeiras. Financeiro seguran??a e
            conhecimento andam de m??os dadas.
          </Typography>
        </Content>

        <Content marginBottom="12rem">
          <Typography component="h2">
            Melhores investimentos para a aposentadoria
          </Typography>

          <Typography component="p">
            Para ter uma aposentadoria confort??vel, segura e divertida, voc??
            precisa construir o colch??o financeiro que vai custear tudo. Para
            isso, ?? necess??rio que voc?? conhe??a aplica????es que ofere??am mais
            seguran??a e rentabilidade para o seu t??o suado dinheirinho. Ent??o
            confira quais s??o os melhores investimentos para a sua
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
            ?? um t??tulo p??blico que faz parte de um programa do Tesouro Nacional
            desenvolvido em parceria com a B3 (BM&FBovespa), a fim de facilitar
            o acesso de todos os tipos de investidores aos t??tulos p??blicos
            federais.
          </Typography>

          <Typography component="p">
            Um investimento para aposentadoria precisa ser feito levando em
            conta o futuro. Ent??o, os t??tulos mais adequados para essa ocasi??o
            s??o os de longo prazo, como por exemplo o{' '}
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
            Este t??tulo ?? p??s-fixado e o seu rendimento varia de acordo com a
            soma da taxa de juros prefixada e a varia????o da{' '}
            <a
              href="https://www.bcb.gov.br/controleinflacao/oqueinflacao"
              target="_blank"
              rel="nofollow noreferrer"
            >
              infla????o
            </a>{' '}
            durante o per??odo medida pelo ??ndice de Pre??os ao Consumidor Amplo
            (IPCA).
          </Typography>

          <Typography component="h3">2. Previd??ncia Privada</Typography>

          <Typography component="p">
            O sistema de previd??ncia complementar ?? composto de{' '}
            <strong>fundos de investimentos</strong> constitu??dos especialmente
            para oferecer uma garantia adicional de renda ao trabalhador durante
            a aposentadoria. Muitas vezes, a participa????o nesse tipo de
            investimento ?? fechada para funcion??rios de empresas, nos conhecidos
            fundos de pens??o, mas existem op????es abertas a qualquer interessado.
          </Typography>

          <Typography component="p">
            Os pagamentos podem ser mensais ou de uma s?? vez e ainda pode fazer
            contribui????es adicionais sempre que tiver uma grana sobrando.
            Lembre-se que quanto mais voc?? investir e em maior tempo, mais seu
            dinheiro cresce.
          </Typography>

          <Typography component="h3">3. Fundos de Investimento</Typography>

          <Typography component="p">
            Os fundos de investimento s??o produtos de investimento criados com o
            ??nico prop??sito de reunir o capital dos investidores e investi-lo
            coletivamente por meio de uma carteira de instrumentos financeiros,
            como a????es, t??tulos e outras aplica????es. Um fundo de investimento
            oferece uma sele????o mais ampla de oportunidades de investimento,
            maior experi??ncia em gest??o e taxas de investimento mais baixas do
            que os investidores poderiam obter por conta pr??pria.
          </Typography>
        </Content>
      </MainContainer>
      <Footer />
    </>
  );
}
