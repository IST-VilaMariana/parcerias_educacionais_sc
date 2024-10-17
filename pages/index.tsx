import Head from 'next/head';
import { SliderShowVideo } from '../src/components/SliderShowVideo';
import { Carousel } from '../src/components/Carousel';
import styles from '../styles/Home.module.css';
import { Form } from '../src/components/Form';
import { Navigation } from '../src/components/Navigation';
import { MenuSocialMedia } from '../src/components/MenuSocialMedia';
import { CardListEmpresas } from '../src/components/CardListEmpresas';
import { ButtonDownload } from '../src/components/ButtonDownload';
import { ButtonForHome } from '../src/components/ButtonForHome';

export default function Home() {
  
  return (
    <>
      <Head><title>Senai SC | Parcerias </title></Head>
        <main>
          <section id="home" className={styles.sectionContainer}>
            <br />
              <h1>Programa Parcerias Educacionais</h1>
            <div className={styles.title}>
              <h2>SOBRE O PROGRAMA DE PARCERIAS</h2>
              <MenuSocialMedia/>
            </div>
            <p>O programa <strong>Parcerias Educaionais</strong> foi criado com o intuito de estabelecer um canal direto de comunicação entre a 
            <strong> SENAI SC</strong> e seus parceiros, apresentar as diretrizes e modelos para consecução de novas parcerias, bem 
            como demonstrar os benefícios em ser um parceiro deste programa.</p>
            <Navigation />
            <p>O programa estabelece os seguintes benefícios:</p>
            <Carousel />
            <div className={styles.title}>
              <h2>UMA REDE PARA + VALORES</h2>
            </div>
            <br />
            <p>O <strong>SENAI SC</strong> já consolidou mais de 65 parcerias em 12 setores da indústria, distribuídos por sua rede. Alguns exemplos de sucesso estão concentrados nas áreas de automobilística, metalmecâncica e etc.</p>
            <br />
            <div className={styles.title}>
              <h2>EMPRESAS QUE JÁ FAZEM PARTE</h2>
            </div>
            <br />
            <p>Confira a lista de empresas que já são parceiros:</p>
            <br />
            <ButtonForHome/>
            <CardListEmpresas />
          </section>
          <section className={styles.sectionContainer}>
            <br />
            <div className={styles.title}>
              <h2 id="depoimentos">DEPOIMENTOS</h2>
            </div>
            <br />
            <p>Conheça o pragrama pelas palavras de quem já faz parte da nossa rede.</p>
            <br />
            <SliderShowVideo />
          </section>
          <section className={styles.sectionContainer}>
            <div className={styles.title}>
              <h2 id="editais">MODELOS DE PARCERIAS</h2>
            </div>
            <br />
            <p>O <strong>SENAI SC</strong> estabelece suas parcerias por meio de modelos de negócios que estabelecem contrapartidas, 
            visando ganhos bilaterais entre os paceiros</p>
            <span>I. Tipos de instrumentos jurídicos anteriores à formalização de parcerias:</span>
            <ul>
              <li><div><p>Edital de pacerias</p></div><ButtonDownload endereco_url="url_doarquivo"/></li>
              <li><div><p>Termo de Confidencialidade</p></div><ButtonDownload endereco_url={"url_doarquivo"}/></li>
              <li><div><p>Protocolo de Intenções</p></div><ButtonDownload endereco_url={"url_doarquivo"}/></li>
            </ul>
            <span>II. Tipos de instrumentos jurídicos para formalização de parcerias:</span>
            <ul>
              <li><div><p>Convênio: Termo de Cooperação</p></div><ButtonDownload endereco_url={"url_doarquivo"}/></li>
              <li><div><p>Comodato Padrão</p></div><ButtonDownload endereco_url={"url_doarquivo"} /></li>
              <li><div><p>Comodato Escolas Móveis</p></div><ButtonDownload endereco_url={"url_doarquivo"} /></li>
              <li><div><p>Cessão Não-onerosa de Software</p></div><ButtonDownload endereco_url={"url_doarquivo"} /></li>
            </ul>
          </section>
          <section className={styles.sectionContainer}>
            <div className={styles.title}>
              <h2 id="seja_parceiro">COMO FAZER PARTE</h2>
            </div>
            <br />
            <p>Caso sua empresa esteja interessada em se tornar um parceiro do <strong>SENAI SC</strong></p>
            <br />
            <Form />
          </section>
        </main>      
    </>
  )
}

