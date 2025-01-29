import pictureCV from './assets/pictureCVNo.webp';
import pictureCV2 from './assets/pictureCVNo.png';
import Github from './assets/Github.svg';
import linkedin from './assets/Linkedin.svg';
// import CVPDF from './assets/CV.pdf';
import PHP from './assets/PHP.svg';
import SQL from './assets/SQL.svg';
import Laravel from './assets/Laravel.svg';
import JQUERY from './assets/JQUERY.svg';
import REACT from './assets/REACT.svg';
import SASS from './assets/SASS.svg';
import CSS from './assets/CSS.svg';
import Bootstrap from './assets/BOOTSTRAP.svg';
import JAVASCRIPT from './assets/JAVASCRIPT.svg';
import EMAIL from './assets/EMAIL.svg';
// import EMAIL2 from './assets/EMAIL2.svg';
import EMAIL3 from './assets/EMAIL3.svg';
import lovebyme from './assets/lovebyme.webp';
import lovebyme2 from './assets/lovebyme.png';
import LinkApp from './assets/LinksApp.webp';
import LinkApp2 from './assets/LinksApp.png';
import POKEAPI from './assets/POKEAPI.webp';
import POKEAPI2 from './assets/POKEAPI.png';
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

      <HeaderComponent pictureCV={pictureCV} pictureCV2={pictureCV2} >
        <SocialCard Title="Github" src={Github} href="https://github.com/higueromora" alt="github" />
        <SocialCard Title="LinkedIn" src={linkedin} href="https://www.linkedin.com/in/%C3%A1ngel-higuero-mora-9b3085349/" alt="LinkedIn" />
        <SocialCard Title="Email" src={EMAIL3} href="mailto:angelmoradev@gmail.com" alt="Email" />
      </HeaderComponent>

      <hr className="custom-hr" />

      <Experience
        title="Experience"
        experiences={experiences}
      />

      <div className='project-h1'>
        <h1 className="title-project">Projects</h1>
      </div>

      <ProjectCard
        image={LinkApp}
        image2={LinkApp2}
        projectName="Links App"
        description="Online resource collector. A place where you can group your links resources."
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
        image={POKEAPI}
        image2={POKEAPI2}
        projectName="PokeAPI"
        description="API about Pokémon. Search for Pokémon."
        icons={[
          { icon: CSS, name: 'CSS' },
          { icon: JAVASCRIPT, name: 'JavaScript' },
          { icon: REACT, name: 'React' }
        ]}
        viewCodeLink="https://github.com/higueromora/pokeapi"
      />
      <ProjectCard
        image={lovebyme}
        image2={lovebyme2}
        projectName="L💛veByMe"
        description="Combinate classic Instagram with Tinder-style matching and chat exclusive for matched users. Using APIs Pusher and Mailtrap."
        icons={[
          { icon: SASS, name: 'Sass' },
          { icon: Bootstrap, name: 'Bootstrap' },
          { icon: JQUERY, name: 'jQuery' },
          { icon: SQL, name: 'SQL' },
          { icon: Laravel, name: 'Laravel' }
        ]}
        viewCodeLink="https://github.com/higueromora/DatingApp-LoveByMe-Laravel"
      />

      <EmailContact email={EMAIL} />

    </>
  )
}

export default App
