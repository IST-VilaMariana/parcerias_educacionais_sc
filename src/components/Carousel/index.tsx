import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { useEffect, useRef, useState } from "react";
import { ButtonPressLefth } from '../ButtonPressLefth';
import { ButtonPressRight } from '../ButtonPressRight';

const questionsAnswers = [
  {
    question: 'Desenvolvimento de Capital Humano',
    answer: 'As parcerias possibilitam a capacitação do capital humano interno e externo, mantendo atualizados os colaboradores e clientes das empresas parceiras envolvidos no programa.'
  },
  {
    question: 'Atendimento às novas demandas da Indústria',
    answer: 'Com a inserção de novas tecnologias, torna-se possível a construção e a oferta de produtos e serviços educacionais, tecnológicos e de inovação, compatíveis com a demanda da indústria.'
  },
  {
    question: 'Antecipação de Tendências Tecnológicas',
    answer: 'É importante que a sociedade esteja preparada para as novas demandas do mercado de trabalho, principalmente quando se trata das tecnologias habilitadoras para a indústria 4.0.'
  },
  {
    question: 'Troca de Experiência e Conhecimento',
    answer: 'Uma parceria pode proporcionar uma ampla troca de experiências, trazer insights, adquirir novas habilidades, que possam contribuir para a expansão do negócio.'
  },
  {
    question: 'Mais valor agregado para as marcas parceiras',
    answer: 'Bons parceiros contribuem para elevar o nível de exposição das marcas, garantindo mais visibilidade junto aos clientes.'
  },
  {
    question: 'Difusão Tecnológica',
    answer: 'Os esforços conjuntos com a SENAI SC e de seus parceiros, visam a mordenização de processos, mediante ao uso de produtos e serviços difundidos no mercado.'
  },
  {
    question: 'Capilaridade da Rede SENAI SC',
    answer: 'Uma parceria consolidada com uma Unidade Operacional do SENAI SC posibilita sua disseminação pela rede no estado, trazendo mais vantagens para as empresas parceiras.'
  }
];

export function Carousel() {
  const carousel = useRef(null);
  const [widthSlider, setWidthSlider] = useState(0);
  const [positionSlider, setPositionSlider] = useState(false)

  const [activeIndex, setActiveIndex] = useState(0);

  let boxSlider = carousel.current;

  function nextSlide() {
    // let width = boxSlider.clientWidth;
    // boxSlider.scrollLeft = boxSlider.scrollLeft + width;
    // console.log(`in nextSlide ${width}`);

    if (!boxSlider) return;

    let width = boxSlider.clientWidth;
    let newScrollLeft = boxSlider.scrollLeft + width;

    boxSlider.scrollTo({ left: newScrollLeft, behavior: "smooth" });

    // Atualiza o índice do bullet
    setActiveIndex((prev) => Math.min(prev + 1, questionsAnswers.length - 1));
  }

  function prevSlide() {
    // let width = boxSlider.clientWidth;
    // boxSlider.scrollLeft = boxSlider.scrollLeft - width;
    // console.log(`in prevSlide ${width}`)

    if (!boxSlider) return;

    let width = boxSlider.clientWidth;
    let newScrollLeft = boxSlider.scrollLeft - width;

    boxSlider.scrollTo({ left: newScrollLeft, behavior: "smooth" });

    // Atualiza o índice do bullet
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }

  function handlePagination() {
    setPositionSlider(true)
  }

  useEffect(() => {

    if (carousel.current) {
      setWidthSlider(carousel.current.scrollWidth - carousel.current.clientWidth);
    }

    const handleScroll = () => {
      if (!carousel.current) return;

      const scrollLeft = carousel.current.scrollLeft;
      const totalWidth = carousel.current.scrollWidth - carousel.current.clientWidth;

      // Evita erro de divisão por zero
      if (totalWidth === 0) return;

      // Calcula o índice ativo
      const index = Math.round((scrollLeft / totalWidth) * (questionsAnswers.length - 1));
      setActiveIndex(index);
    };

    const carouselRef = carousel.current;
    if (carouselRef) {
      carouselRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef) {
        carouselRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.container_slider}>
      <div className={styles.slider}>
        <ButtonPressLefth prevSlide={prevSlide} />

        <motion.div
          ref={carousel}
          className={styles.carousel}
          whileTap={{ cursor: 'grabbing' }}
        >


          <motion.div
            className={styles.inner}
            drag="x"
            dragConstraints={{ right: 0, left: -widthSlider }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", bounce: 0.2, delay: 0.7, duration: 1 }}
          >
            {questionsAnswers.map(item => (
              <motion.div key={item.question} className={styles.item}>
                <div className={styles.bloco}>
                  <span>{item.question}</span>
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <ButtonPressRight nextSlide={nextSlide} />
      </div>

      <div className={styles.container_slider_indicator}>
        {questionsAnswers.map((_, index) => {
          const isActive = Math.round(activeIndex) === index;

          return (
            <span
              key={index}
              onClick={() => {
                if (carousel.current) {
                  const width = carousel.current.clientWidth;
                  carousel.current.scrollTo({ left: index * width, behavior: "smooth" });
                  setActiveIndex(index);
                }
              }}
              className={`${styles.slider_indicator} ${isActive ? styles.slider_indicator_active : ''}`}
              style={{
                width: isActive ? "1rem" : "0.5rem",
                backgroundColor: isActive ? "var(--brand-700)" : "gray",
                transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out"
              }}
            ></span>
          );
        })}
      </div>
    </div>
  )
}