 import React from 'react'
//  import CardItem from './CardItem'
 import './Cards.css'


 function Cards() {
   return (
       <div className='cards'>
            <div className='containerImg'>
              <h2 className='titleImg'>Photo gallery</h2>
              <div className='photo-gallery'>

                <div className='column'>
                  <div className='photo'>
                    <img src='images/cam3.jpg' alt='' loading="lazy" />
                  </div>
                  <div className='photo'>
                    <img src='images/cam1.jpg' alt='' loading="lazy" />
                  </div>
                  <div className='photo'>
                    <img src='images/cam2.jpg' alt='' loading="lazy" />
                  </div>
                </div>

                <div className='column'>
                  <div className='photo'>
                    <img src='images/cam2.jpg' alt='' loading="lazy" />
                  </div>
                  <div className='photo'>
                    <img src='images/cam4.jpg' alt='' loading="lazy" />
                  </div>
                  <div className='photo'>
                    <img src='images/cam1.jpg' alt='' loading="lazy" />
                  </div>
                </div>

                <div className='column'>
                  <div className='photo'>
                    <img src='images/cam1.jpg' alt='' loading="lazy" />
                  </div>
                  <div className='photo'>
                    <img src='images/cam2.jpg' alt='' loading="lazy" />
                  </div>
                  <div className='photo'>
                    <img src='images/cam3.jpg' alt='' loading="lazy" />
                  </div>
                </div>

              </div>
            </div>
           {/* //DODANO: */}

       </div>
   )
 }

 export default Cards

