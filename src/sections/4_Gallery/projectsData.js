import Carrossel from '../../assets/images/Carrossel.png';
import AppleClone from '../../assets/images/AppleClone.png';
import arvoreGenealogica from '../../assets/images/ArvoreGenealogica.png';

const projectsData = {
  carrossel: {
    name: 'Carrossel Responsivo',
    img: Carrossel,
    languages: 'HTML & CSS',
    description: 'Este é um projeto que visa criar um carrossel de imagens sem a necessidade de JavaScript, utilizando apenas HTML para marcação e CSS para estilização e "lógica". O objetivo é proporcionar uma experiência visualmente atraente e ergonomicamente amigável, especialmente otimizada para dispositivos móveis.',
    repository: 'https://github.com/andsjoel/CSS-Carousel',
    page: 'https://andsjoel.github.io/CSS-Carousel/',
    finished: true,
  },
  appleClone: {
    name: 'Apple Clone',
    img: AppleClone,
    languages: 'HTML & CSS',
    description: 'Projeto Clone da Apple, um site frontend desenvolvido com HTML e CSS puro, destacando um carrossel de imagens sem a necessidade de JavaScript. Este projeto foi criado como um exercício para aprimorar as habilidades de design e implementação de interfaces web.',
    repository: 'https://github.com/andsjoel/Apple-User-Interface',
    page: 'https://andsjoel.github.io/Apple-User-Interface/',
    finished: true,
  },
  arvoreGenealogica: {
    name: 'Arvore Genealógica',
    img: arvoreGenealogica,
    languages: 'HTML, CSS & JavaScript',
    description: 'Este projeto é uma aplicação para criar e visualizar árvores genealógicas. Permite aos usuários registrar informações sobre membros da família, incluindo nomes, datas de nascimento e falecimento, e relacionamentos familiares. A árvore genealógica é então montada e pode ser visualizada de maneira interativa.',
    repository: 'https://github.com/andsjoel/arvoreGenealogica',
    page: 'https://andsjoel.github.io/arvoreGenealogica/',
    finished: false,
  },
};

export default projectsData;
