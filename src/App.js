import './App.css';
import React,{useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Card from './card';

function App() {
  const[slide,setSlide]=useState("left")
  const[text,setText]=useState("")
  const[fix,setFix]=useState(0)


  function onChange1 (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
   if(isVisible){
   
    setText("Elon Musk")
   }
   
  }

  function onChange2 (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    if(isVisible){
    
     setText("Bill Gates")
    }
   
  }

  function onChange3 (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    if(isVisible){
    
     setText("Tim Cook")
    }
   
  }

  function onChange4 (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    if(isVisible){
    
     setText("Hayden Wood")
    }
   
  }


  //know when our component comes into view so we can scroll down.
  function onChange5 (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
   if(isVisible){
    setSlide("left2")
    setFix(fix + 1)
    
   }
   if(fix > 1){
     setSlide("left")
     setFix(0)
   }
   
  }

  
  
  
  console.log(slide)

  return (
    <div>
  
    <div className="App">
     
     <div className={slide}>
      
      
      
      <h1>Slide {text}</h1>
     </div>

     <div className="right">
     <section class="stacking-slide">
    <h2 style={{"marginLeft":"40px"}}>Top Ceo's Fighting Climate Change</h2>
    <VisibilitySensor onChange={onChange1}>
      <div><Card name="Elon Musk" image="https://expatguideturkey.com/wp-content/uploads/2022/04/elon-musk-.jpeg"/></div>
    </VisibilitySensor>
   
</section>
<section class="stacking-slide">
<h2 style={{"marginLeft":"40px"}}>Top Ceo's Fighting Climate Change</h2>
    <VisibilitySensor onChange={onChange2}>
    <div><Card name="Bill Gates" image="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/08/13/206467-untitled-design-24.jpg"/></div>
    </VisibilitySensor>
</section>
<section class="stacking-slide">
<h2 style={{"marginLeft":"40px"}}>Top Ceo's Fighting Climate Change</h2>
    <VisibilitySensor onChange={onChange3}>
    <div><Card name="Tim Cook" image="https://media.gettyimages.com/photos/tim-cook-chief-executive-officer-of-apple-speaks-during-an-apple-at-picture-id1032224410?s=2048x2048"/></div>
    </VisibilitySensor>
</section>
<section class="stacking-slide">
<h2 style={{"marginLeft":"40px"}}>Top Ceo's Fighting Climate Change</h2>
    <VisibilitySensor onChange={onChange4}>
    <div><Card name="Hayden Wood" image="https://arealnews.com/wp-content/uploads/2022/04/Hayden-Wood-Wiki.jpg"/></div>
    </VisibilitySensor>
</section>
<section class="stacking-slide">
<h2 style={{"marginLeft":"40px"}}>Top Ceo's Fighting Climate Change</h2>
    <VisibilitySensor onChange={onChange5}>
    <div><Card name="Yvon Chouinard" image="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2019/10/p-1-uphill-climb-FA1119YVON001.jpg"/></div>
    </VisibilitySensor>
</section>
     </div>
    </div>


<div className='bottom'>
 <h1>Footer</h1>
</div>
    </div>
  );
}

export default App;
