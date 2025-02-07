import pictureCV from './assets/pictureCVNo.webp';
import pictureCV2 from './assets/pictureCVNo.png';
import Github from './assets/Github.svg';
import linkedin from './assets/Linkedin.svg';
// import CVPDF from './assets/CV.pdf';
import PHP from './assets/PHP.svg';
import SQL from './assets/SQL.svg';
import NODE from './assets/node.svg';
import Laravel from './assets/Laravel.svg';
import JQUERY from './assets/JQUERY.svg';
import REACT from './assets/REACT.svg';
import SASS from './assets/SASS.svg';
import CSS from './assets/CSS.svg';
import Bootstrap from './assets/BOOTSTRAP.svg';
import JAVASCRIPT from './assets/JAVASCRIPT.svg';
// import EMAIL2 from './assets/EMAIL2.svg';
import EMAIL3 from './assets/EMAIL3.svg';
import lovebyme from './assets/lovebyme.webp';
import lovebyme2 from './assets/lovebyme.png';
import LinkApp from './assets/LinksApp.webp';
import LinkApp2 from './assets/LinksApp.png';
import cat1 from './assets/cat.webp';
import cat2 from './assets/cat.jpg';
import './App.css'
import Experience from './components/Experience'
import { SocialCard } from './components/SocialCard'
import { experiences } from './constants/experiences'
import { EmailContact } from './components/EmailContact'
import ProjectCard from './components/ProjectCard'
import HeaderComponent from './components/HeaderComponent'

function App() {


  return (
    <>

      <HeaderComponent pictureCV={pictureCV} pictureCV2={pictureCV2}>
        <SocialCard Title="Github" src={Github} href="https://github.com/higueromora" alt="github" />
        <SocialCard Title="LinkedIn" src={linkedin} href="https://www.linkedin.com/in/angel-higuero-mora/" alt="LinkedIn" />
        <SocialCard Title="Email" src={EMAIL3} href="mailto:angelmoradev@gmail.com" alt="Email" />
      </HeaderComponent>

      <hr className="custom-hr" />

      <Experience
        title="Experiencia"
        experiences={experiences}
      />

      <div className='project-h1'>
        <h1 className="title-project">Proyectos</h1>
      </div>

      <ProjectCard
        image={cat1}
        image2={cat2}
        projectName="Cat Attack"
        description="Juego multijugador usando Socket, React y Node.js"
        icons={[
          { icon: CSS, name: 'CSS' },
          { icon: JAVASCRIPT, name: 'JavaScript' },
          { icon: REACT, name: 'React' },
          { icon: NODE, name: 'Node.JS' }
        ]}
        viewCodeLink="https://github.com/higueromora/multiplayerGame"
      />
      <ProjectCard
        image={LinkApp}
        image2={LinkApp2}
        projectName="Links App"
        description="Recolector de recursos en la que cada usuario guarda sus propios links"
        icons={[
          { icon: CSS, name: 'CSS' },
          { icon: JAVASCRIPT, name: 'JavaScript' },
          { icon: JQUERY, name: 'jQuery' },
          { icon: PHP, name: 'PHP' },
          { icon: SQL, name: 'MSQL' }
        ]}
        viewCodeLink="https://github.com/higueromora/links"
      />
      <ProjectCard
        image={lovebyme}
        image2={lovebyme2}
        projectName="L💛veByMe"
        description="Combinación de Instagram clásico con match de tinder que tiene un chat exclusivo para usuarios emparejados"
        icons={[
          { icon: SASS, name: 'Sass' },
          { icon: Bootstrap, name: 'Bootstrap' },
          { icon: JQUERY, name: 'jQuery' },
          { icon: SQL, name: 'SQL' },
          { icon: Laravel, name: 'Laravel' }
        ]}
        viewCodeLink="https://github.com/higueromora/DatingApp-LoveByMe-Laravel"
      />

      <EmailContact />

    </>
  )
}

export default App
