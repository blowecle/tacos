import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './Nav.css'
import Footer from './Footer';
import './Footer.css'
import Header from './Header';
import tortillas from './images/taco_hand_1_efvqt1.jpg'
import { Link } from 'react-router-dom';
import EmailForm from './EmailForm';
import image1 from './images/IMG_0448.jpeg'
import image2 from './images/IMG_0630.jpeg'
import image3 from './images/IMG_0638.jpeg'
import image4 from './images/IMG_0781.jpeg'
import image5 from './images/IMG_0945.jpeg'
import image6 from './images/IMG_1897.jpeg'
import { Parallax, Background } from 'react-parallax';
import truck from './images/truck.jpg'


function App() {


  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const onLoad = () => {
    window.scrollTo(0, 0)
    }

    setTimeout(onLoad, 1000)
  }, [])

  // const handleClick = (ref) => {
  //   if (ref.current) {
  //     const headerHeight = 0.15 * window.innerHeight;
  //     const elementTopOffset = ref.current.getBoundingClientRect().top;
  //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  //     if(visible) setVisible(false);

  //     window.scrollTo({
  //       top: scrollPosition + elementTopOffset - headerHeight,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const handleClick2 = (ref) => {
  //   if (ref.current) {
  //     const headerHeight = 0.342 * window.innerHeight;
  //     const elementTopOffset = ref.current.getBoundingClientRect().top;
  //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  //     if(visible) setVisible(false);

  //     window.scrollTo({
  //       top: scrollPosition + elementTopOffset - headerHeight,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <div className='wrapper'>
      <div className='inner-wrapper'>
          <div className="desktop-header-wrapper">
            <Header show={false}/>
          </div>
        <div className='logo-wrapper'>
          <img className='logo' src={tortillas} alt='tortillas'/>
          <div className='overlay1 overlay'>
            <img src={image1} className='overlay-image1' alt='image1'/>
          </div>
          <div className='overlay2 overlay'>
            <img src={image2} className='overlay-image2' alt='image2'/>
          </div>
          <div className='overlay3 overlay-bottom'>
            <img src={image3} className='overlay-image3' alt='image3'/>
          </div>
        </div>
        <div className='content about'>
          <div className='content-wrapper'>
            <div className='content-body-about'>
              <div className='traviesas-content'>
                Tacos Traviesas (Trah-vyeh-sahs) is a nod to all the Traviesas in our lives: our moms, our sisters, daughters, friends and nanas. We take traditional family recipes and meld them with new techniques, flavors and ideas to bring the best Mexican food to West Ireland. Our founders were born and raised in Texas and California with family all throughout the American Southwest and Mexico. 
                <br/><br/>
                We combine flavors from the Yucatan Peninsula, Northern Mexico, California, Texas and everything in between, showcasing the aromas, flavors, and beauty of Mexican Cuisine. We source heirloom maize and beans from Mexico while seeking to source the rest of our menu from local farmers, butchers and grocers. 
                <br/><br/>
                Our aim is to bridge cultures through food, sharing what brings us the most joy in our lives: tacos. 
              </div>
              <Parallax className='parallax' 
              strength={300}
              >
                <Background className="custom-bg">
                    <img className='truck-img' src={truck} alt="fill murray" />
                </Background>
              </Parallax>
            <div className='chef-wrapper'>
              <div className='circle-outer'>
                <div className='circle'></div>
              </div>
              <div className='content-header-chef'>Our Chef</div>
              <div className='circle-outer'>
                <div className='circle'></div>
              </div>
            </div>
            </div>
            <div className='zoe-name'>Zoë Salcedo</div>
            <div className='content-body-about'>
              <div className='traviesas-content bottom'>
              Zoë Salcedo spent much of her childhood, teenage years, and early adulthood in San Francisco's vibrant Mission District, an area rich in Mexican, Central American, and broader Latin influences. She began her culinary journey as a dishwasher at The Liberty Cafe and gradually progressed through some of San Francisco's finest kitchens, from Incanto to Bar Tartine and Delfina. She also had the distinction of opening San Francisco’s first dedicated Champagne bar. Throughout these experiences, she worked closely with predominantly Spanish-speaking colleagues. It was in these kitchens that she developed a deep appreciation for the language, cuisine, people, music, and expansive culture of Mexico, with all its flavorful nuances.
                <br/><br/>
                Zoë brings an extensive culinary skillset, vast knowledge in her field, and above all, a relentless curiosity that always seeks new flavors and time-honored techniques.
                <br/><br/>
                Beyond her role at our taco truck, Zoë is multifaceted: she's the cherished mother of Beatrix Bean and a loving wife to Chris Salcedo.
              </div>
            </div>
          </div>
        </div>
        <div className='content menu'>
        <div className='slider'>
          <div className='slides'>
              <div className='slide'>
                  <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951073/tacos/IMG_0223_sdsk2z.jpg' alt='taco'/>
              </div>
              <div className='slide'>
                  <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951073/tacos/IMG_0252_yvi6ju.jpg' alt='taco'/>
              </div>
              <div className='slide'>
                  <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951069/tacos/IMG_0244_d6cqrw.jpg' alt='taco'/>
              </div>
              <div className='slide'>
                  <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951071/tacos/IMG_0337_jrbpep.jpg' alt='taco'/>
              </div>
              <div className='slide'>
                    <img src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1684951069/tacos/IMG_0244_d6cqrw.jpg' alt='taco'/>
              </div>
          </div>
        </div>
        <div className='menu-wrapper'>
          <div className='content-header-menu'>MENU</div>
          <div className='menu-content'>Our menu changes often so please follow us on 
instagram:</div>
<div className='insta'>
  <a className='insta-link' href='https://www.instagram.com/tacostraviesas/'>@TacosTraviesas</a>
  </div>
        </div>
        </div>
        <div ref={ref3} className='content catering'>
          <div className='cater-wrapper'>
            <div className='content-header-catering'>CATERING INQUIRIES</div>
            <div className='catering-content'>
            We would love to help you with your big events.<br/>
Please fill out the form below and we will<br/>
contact you as soon as possible.
            </div>
            <div className='content-body cater-body'>
              <EmailForm />
            </div>
          </div>
        </div>
        <div className='content section zoe-content'>
          <div className='content-header-taco'>HOW TO FIND US</div>
            <div className='content-body-taco'>Our menu, location, times change frequently so<br/>
please follow us on Instagram and Twitter.</div>
            <div className='social-wrapper'>
              <a href='https://www.instagram.com/tacostraviesas/'>
                <img className='social' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1686836033/tacos/Instagram_icon_hl60eh.png' alt='insta'/>
              </a>
              <a href='https://twitter.com/tacostraviesas1'>
                <img className='social' src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1686836033/tacos/Twitter_icon_n10mmy.png' alt='twitter'/>
              </a>
            </div>
            <div className='overlay4 overlay-bottom-large'>
            <img src={image4} className='overlay-image4' alt='image4'/>
          </div>
          <div className='overlay5 overlay'>
            <img src={image5} className='overlay-image5' alt='image5'/>
          </div>
          <div className='overlay6 overlay-bottom'>
            <img src={image6} className='overlay-image6' alt='image6'/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;