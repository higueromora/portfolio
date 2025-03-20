import pictureCV from './assets/pictureCVNo.webp';
import pictureCV2 from './assets/pictureCVNo.png';
import lovebyme from './assets/lovebyme2.webp';
import lovebyme2 from './assets/lovebyme2.jpg';
import LinkApp from './assets/LinkApp.webp';
import LinkApp2 from './assets/LinkApp.jpg';
import cat1 from './assets/cat.webp';
import cat2 from './assets/cat.jpg';
import gym1 from './assets/gym.jpg'
import gym2 from './assets/gym.webp'
import './App.css'
import Experience from './components/Experience'
import { SocialCard } from './components/SocialCard'
import { experiences } from './constants/experiences'
import { EmailContact } from './components/EmailContact'
import ProjectCard from './components/ProjectCard'
import HeaderComponent from './components/HeaderComponent'
import { GithubIcon, LinkedinIcon, EmailIcon, JavascriptIcon, JqueryIcon, MysqlIcon, PhpIcon, LaravelIcon, ReactIcon, NodeIcon, TypescriptIcon, TailwindcssIcon } from './components/icons/Icons';
import osito from './assets/osito.gif'

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
        image={gym1}
        image2={gym2}
        projectName="Gym"
        description="Landing page de un gym"
        icons={[
          { icon: <TailwindcssIcon />, name: 'Tailwindcss', backgroundColor: '#025A85' },
          { icon: <TypescriptIcon />, name: 'Typescript.JS', backgroundColor: '#2c5472' },
          { icon: <ReactIcon />, name: 'React', backgroundColor: '#255A85' },
        ]}
        viewCodeLink="https://github.com/higueromora/gym-landing-page"
        viewDemoLink="https://gym-landing-page-ivory.vercel.app/"
      />
      <ProjectCard
        image={cat1}
        image2={cat2}
        projectName="Cat Attack"
        description="Juego multijugador usando Socket, React y Node.js"
        icons={[
          { icon: <JavascriptIcon />, name: 'JavaScript', backgroundColor: '#796C00' },
          { icon: <ReactIcon />, name: 'React', backgroundColor: '#255A85' },
          { icon: <NodeIcon />, name: 'Node.JS', backgroundColor: '#0B4D0A' }
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

      <EmailContact osito={osito} />

    </>
  )
}

export default App
