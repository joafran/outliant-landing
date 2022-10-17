import Brands from "./components/brands"
import {
  ContactUs, 
  Home, 
  LearnMore, 
  ScheduleCall,
  Services
} from "./sections/"
import codeSvg from './assets/code.svg'
import performance from './assets/performance.svg'

const App = (): JSX.Element => {

  return (
    <main className="bg-[color:var(--secondary-color)]">
      <Home />
      <Brands />
      <LearnMore 
       content="We are entrepreneurs, 
       engineers, and designers solving hard problems for passionate creators. 
       We believe humans are wired to create, and through genuine collaboration, we can build amazing things. 
       We'd love to work with you, so take a look around, and reach out if you think we'd be a good fit." 
       contentAlign="left" 
       image={codeSvg}
      />
      <Services />
      <LearnMore 
       content="We founded Outliant to build the agency we wished 
       we could work with: a modern, one-stop shop that can work the way you need.
       Our services are remarkably flexible - use them à la carte, or let us build a completely custom plan to fit your needs." 
       contentAlign="right" 
       image={performance}
      />
      <ScheduleCall />
      <ContactUs />
    </main>
  )
}

export default App
