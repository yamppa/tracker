import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function About() {
  return (
    <>
    <Header/>
    <div className='about-container'>
      <h2>About</h2>
      <div className='text-div'>
      Improving habits can be challenging, especially getting started.
      Our app makes it easy to track what you've accomplished.
        The potential for developing new habits is endless, so 
        it's crucial to have the flexibility to create your own tasks.
      </div>
      <div className='text-div'>
      Staying on top of habit-building can be tough when life gets busy with work,
      school, and more. This often leads to the development 
      of bad habits. We tend to take the path of least 
      resistance and neglect our good habits, like skipping 
      exercise, eating poorly, or not taking time for self-care.
      </div>
      <div className='text-div'>
      With our app, you can effortlessly keep track of completed tasks 
      and what still needs to be done, whether it's daily or over a 
      longer period. You don't have to stress about keeping tabs on 
      your progress amidst the chaos; let the app do it for you.
      </div>
      <div className='text-div'>
        <h3>Tuotekehitys F4</h3>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About