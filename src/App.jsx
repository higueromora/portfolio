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
import lovebyme from './assets/lovebyme2.webp';
import lovebyme2 from './assets/lovebyme2.jpg';
import LinkApp from './assets/LinkApp.webp';
import LinkApp2 from './assets/LinkApp.jpg';
import cat1 from './assets/cat.webp';
import cat2 from './assets/cat.jpg';
import './App.css'
import Experience from './components/Experience'
import { SocialCard } from './components/SocialCard'
import { experiences } from './constants/experiences'
import { EmailContact } from './components/EmailContact'
import ProjectCard from './components/ProjectCard'
import HeaderComponent from './components/HeaderComponent'
import { GithubIcon, LinkedinIcon, EmailIcon, CssIcon, JavascriptIcon, JqueryIcon, MysqlIcon, PhpIcon, LaravelIcon, ReactIcon, NodeIcon } from './components/icons/Icons';



function App() {


  return (
    <>

      <HeaderComponent pictureCV={pictureCV} pictureCV2={pictureCV2}>
      </HeaderComponent>
      <nav className="nav-socials">
        <SocialCard Title="Contáctame" icon={<EmailIcon />} href="mailto:angelmoradev@gmail.com" />
        <SocialCard Title="LinkedIn" icon={<LinkedinIcon />} href="https://www.linkedin.com/in/angel-higuero-mora/" />
        <SocialCard Title="Github" icon={<GithubIcon />} href="https://github.com/higueromora" />
      </nav>


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
          { icon: <JavascriptIcon />, name: 'JavaScript', backgroundColor: '#796C00' },
          { icon: <ReactIcon />, name: 'React', backgroundColor: '#255A85' },
          { icon: <JavascriptIcon />, name: 'Node.JS', backgroundColor: '#0B4D0A' }
        ]}
        viewCodeLink="https://github.com/higueromora/multiplayerGame"
      />
      <ProjectCard
        image={LinkApp}
        image2={LinkApp2}
        projectName="Links App"
        description="Recolector de recursos en la que cada usuario guarda sus propios links"
        icons={[
          { icon: <JavascriptIcon />, name: 'JavaScript', backgroundColor: '#796C00' },
          { icon: <JqueryIcon />, name: 'jQuery', backgroundColor: '#2E4557' },
          { icon: <PhpIcon />, name: 'PHP', backgroundColor: '#003159' },
          { icon: <MysqlIcon />, name: 'MYSQL', backgroundColor: '#1D5079' }
        ]}
        viewCodeLink="https://github.com/higueromora/links"
      />
      <ProjectCard
        image={lovebyme}
        image2={lovebyme2}
        projectName="L💛veByMe"
        description="Combinación de Instagram clásico con match de tinder. Tiene un chat exclusivo para usuarios emparejados"
        icons={[
          { icon: <JavascriptIcon />, name: 'JavaScript', backgroundColor: '#796C00' },
          { icon: <JqueryIcon />, name: 'jQuery', backgroundColor: '#2E4557' },
          { icon: <PhpIcon />, name: 'PHP', backgroundColor: '#003159' },
          { icon: <MysqlIcon />, name: 'MYSQL', backgroundColor: '#1D5079' },
          { icon: <LaravelIcon />, name: 'Laravel', backgroundColor: '#171A1C' }
        ]}
        viewCodeLink="https://github.com/higueromora/DatingApp-LoveByMe-Laravel"
      />

      <EmailContact />

    </>
  )
}

export default App
