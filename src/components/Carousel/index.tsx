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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidthSlider(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const boxSlider = carousel.current;

    if (!boxSlider) return;

    const handleScroll = () => {
      const scrollLeft = boxSlider.scrollLeft;
      const width = boxSlider.clientWidth;
      const index = Math.round(scrollLeft / width);
      const maxIndex = questionsAnswers.length - 1;
      setActiveIndex(Math.min(index, maxIndex));
    };

    boxSlider.addEventListener('scroll', handleScroll);

    return () => {
      boxSlider.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function nextSlide() {
    const boxSlider = carousel.current;
    if (!boxSlider) return;

    const width = boxSlider.clientWidth;
    const maxScroll = boxSlider.scrollWidth - boxSlider.clientWidth;

    if (boxSlider.scrollLeft + width <= maxScroll) {
      boxSlider.scrollLeft = boxSlider.scrollLeft + width;
    }
  }

  function prevSlide() {
    const boxSlider = carousel.current;
    if (!boxSlider) return;

    const width = boxSlider.clientWidth;

    if (boxSlider.scrollLeft - width >= 0) {
      boxSlider.scrollLeft = boxSlider.scrollLeft - width;
    }
  }

  function goToSlide(index) {
    const boxSlider = carousel.current;
    if (!boxSlider) return;

    const width = boxSlider.clientWidth;
    const maxIndex = questionsAnswers.length - 1;

    if (index >= 0 && index <= maxIndex) {
      boxSlider.scrollLeft = width * index;
    }
  }

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
            drag='x'
            dragConstraints={{ right: 0, left: -widthSlider }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', bounce: 0.2, delay: 0.7, duration: 1 }}
          >
            {questionsAnswers.map((item, index) => (
              <motion.div
                key={item.question}
                className={styles.item}
              >
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
        {questionsAnswers.map((item, index) => (
          <span
            key={item.answer}
            className={index === activeIndex ? `${styles.slider_indicator} ${styles.slider_indicator_active}` : `${styles.slider_indicator}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}