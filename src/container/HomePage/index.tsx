import {
  Footer,
  Header,
  MainContainer,
  SEO,
  Field,
  Box,
  Form,
} from '../../components';
import { GridLayout } from '../../styles/layout';
import { SiteConfig } from '../../config/sinte-config';

export default function HomePage() {
  const planejamentoPresente = {
    legend: 'Planejamento Presente',
    fields: [
      { title: 'Quanto você ganha por mês?' },
      { title: '% da sua renda que você investe?' },
      { title: 'Sua rentabilidade total anual projetada:' },
      { title: 'Quantos anos vai investir até a aposentadoria?' },
      { title: 'Quanto você já têm investido?' },
      { title: 'Você alcançará seu primeiro milhão em:' },
      { title: 'Você se aposentará com:' },
      { title: 'Quantos anos quer viver aposentado?' },
      { title: 'Poderá torrar por mês no máximo:' },
      { title: 'Insira os gastos mensais do velhota:' },
      { title: 'Quantos anos vivendo como aposentado rico?' },
    ],
  };

  const planejamentoFuturo = {
    legend: 'Planejamento Futuro',
    fields: [
      { title: 'Com quanto você quer se aposentar?' },
      { title: 'Quanto tempo você têm até a aposentadoria' },
      { title: 'Sua rentabilidade total anual projetada?' },
      { title: 'Quanto você já têm investido?' },
      { title: 'Quanto você deverá investir por mês:' },
      { title: 'Quantos anos você pretende viver aposentado?' },
      { title: 'Quanto você quer gastar por mês aposentado?' },
      { title: 'Quanto de herança você vai deixar:' },
    ],
  };

  return (
    <>
      <SEO title={SiteConfig.SITE_NAME} />
      <Header />
      <MainContainer>
        <Box marginTop="-12rem">
          <Form legend={planejamentoPresente.legend}>
            <GridLayout>
              {planejamentoPresente.fields.map((value, i) => (
                <Field key={i} title={value.title} />
              ))}
            </GridLayout>
          </Form>
        </Box>

        <Box marginBlock="12rem">
          <Form legend={planejamentoFuturo.legend}>
            <GridLayout>
              {planejamentoFuturo.fields.map((value, i) => (
                <Field key={i} title={value.title} />
              ))}
            </GridLayout>
          </Form>
        </Box>
      </MainContainer>
      <Footer />
    </>
  );
}
