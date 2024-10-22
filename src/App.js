import Home from "./Home"
import Carousel from "./Carousel"
import FounderContainer from "./FounderContainer"
import AlternatingSections from "./components/AlternatingSections"
import WaveBackground from "./WaveBackground"
import OurServices from "./OurServices"
import ImageTextContainer from "./ImageTextContainer"
import TestimonialCarousel from "./TestimonialCarousel"
import Steps from "./Steps"
import TextContainerLayout from "./TextContainerLayout"
import StatesAcceptance from './StatesAcceptance'

import './App.css'
const App = () => {
  return(
    <div>
      
      <Home/>
      <Carousel/>
      <FounderContainer/>
      <AlternatingSections/>
      <WaveBackground/>
      <OurServices/>
      <ImageTextContainer/>
      <TestimonialCarousel/>
      <Steps/>
      <StatesAcceptance/>
      <TextContainerLayout/>
    </div>
  )
}

export default App