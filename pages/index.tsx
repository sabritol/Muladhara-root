import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
// import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
// import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection imageUrl="/yoga.svg" title="Yoga." overTitle="Firmeza y Ligereza">
            <p>El Arte Sutil del Equilibrio Yóguico.</p>
            <ul>
              <li> Yoga Solar o dinamico con herramientas integrales para el desarollo sustentaable y contnuo de la auto practica</li>
              <li>
                Yoga Lunar o regenerativo. Progresivo y respaldados por elemntos que permiten profundizar y habitar la practica desde la
                constante sensacion de soporte y seguridad.
              </li>
            </ul>
          </BasicSection>
          <BasicSection imageUrl="/dance.svg" title="Entreneminto integral" overTitle="Disponibilidad Corporal" reversed>
            <p>
              Una propuesta de entremiento fisico basado en tecnicas danza y artes marciales para aumentar tu rango y posibilidad de
              movimiento
              <strong> Moverte con soltura y flexibilidad</strong>. Corregir tu postura, prevenir accidentes y contar con un rango mas aplio
              se confianza motora
            </p>
            <ul>
              <li>Fuerza estructural</li>
              <li>Flexibilidad integral</li>
              <li>Trabajo cardio respiratorio</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
