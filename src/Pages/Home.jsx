import React from 'react'
import './CSS/Home.css'
// import girl1 from '../Components/assets/images/girl1.jpg'
const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-main1">
        <div className="home-info1">
          <h4 className='home-h4'>Casting the Stars of Tomorrow</h4><br></br>
          <p className='home-parah1'>At Book My Kids, we discover and nurture young talent, connecting aspiring actors and models with opportunities to shine.</p>
          <button className='home-btn1'>Join Now</button>
        </div>
        <div className="home-img1">
          <img src="/images/girl1.jpg"></img>
        </div>
      </div>

      <div className="home-main2">
        <p className='home-parah2'>Join Bookmykids and start your journey to stardom</p><br></br>
        <p className='home-parah3'>Book My Kids is your premier casting platform dedicated to discovering and nurturing younf talent. We connect aspiring child actors,models, and performers with top-tier auditions and casting opportunities in the entertainment industry. Our expert team ensures a seamless process from talent discovery to stardom, providing the support and resources needed for your child to shine. Join Book My Kids today and watch your child's dreams come to life on the big stage.</p>
      </div>

      <div className="home-main3">
        <div className="home-conatiner1">
          <h3 className='home-main3-h3'>Featured job</h3>
          <button className='home-btn2'>View All <img className='home-img2' src='./images/right-arrow-of-straight-thin-line.png' /></button>

        </div>
        <div className="home-container2">
          <div className="home-cards">
            <div className="home-card1">
              <div className="div-one">
                <img className='home-img3' src='./images/63011.jpg' />

                <div className="text-conatiner">
                  <span>Garba Dancers</span><span className='span1'>Dancers</span><br></br><br></br>
                  <img src='./images/location.png' height={15} /><span style={{ fontWeight: 200 }}>Mumbai</span> &nbsp; <img src='./images/calendar.png' height={15} /><span style={{ fontWeight: 200 }}>6 days Remaining</span>
                </div><br></br>

              </div>
              <div className="div-two">
                <img className='home-img4' style={{ height: 25 }} src='./images/bookmark (1).png' />
                <button className='home-btn3'>Apply Now</button>
              </div>
            </div>

            <div className="home-card1">
              <div className="div-one">
                <img className='home-img3' src='./images/logo-2150297_1280.png' />

                <div className="text-conatiner">
                  <span>Clothing Commercial</span><span className='span1'>Acting</span><br></br><br></br>
                  <img src='./images/location.png' height={15} /><span style={{ fontWeight: 200 }}>Delhi</span> &nbsp; <img src='./images/calendar.png' height={15} /><span style={{ fontWeight: 200 }}>4 days Remaining</span>
                </div>

              </div>
              <div className="div-two">
                <img className='home-img4' style={{ height: 25 }} src='./images/bookmark (1).png' />
                <button className='home-btn3'>Apply Now</button>
              </div>
            </div>

            <div className="home-card1">
              <div className="div-one">
                <img className='home-img3' src='./images/logo-2144403_1280.png' width={80} />

                <div className="text-conatiner">
                  <span>Model for Kids Bag Brand</span><span className='span1'>Modelling</span><br></br><br></br>
                  <img src='./images/location.png' height={15} /><span style={{ fontWeight: 200 }}>Pune</span> &nbsp; <img src='./images/calendar.png' height={15} /><span style={{ fontWeight: 200 }}>4 days Remaining</span>
                </div>

              </div>
              <div className="div-two">
                <img className='home-img4' style={{ height: 25 }} src='./images/bookmark (1).png' />
                <button className='home-btn3'>Apply Now</button>
              </div>
            </div>

            <div className="home-card1">
              <div className="div-one">
                <img className='home-img3' src='./images/63011.jpg' />

                <div className="text-conatiner">
                  <span>TV Series</span><span className='span1'>Acting</span><br></br><br></br>
                  <img src='./images/location.png' height={15} /><span style={{ fontWeight: 200 }}>Mumbai</span> &nbsp; <img src='./images/calendar.png' height={15} /><span style={{ fontWeight: 200 }}>4 days Remaining</span>
                </div>

              </div>
              <div className="div-two">
                <img className='home-img4' style={{ height: 25 }} src='./images/bookmark (1).png' />
                <button className='home-btn3'>Apply Now</button>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="home-main4">
        <div className="home-container4">
          <div className="home-info4">
          <p>Connect, collaborate, and grow with fellow actors, models, and creatives. Share insights, spark discussions, and forge valuable connections in our network. Elevate your craft and expand your horizons with like-minded artists today!</p>
          </div>
          
          <button className='home-btn4'>Join our Community</button>
        </div>
      </div>

      <div className="home-main3">
        <div className="home-conatiner1">
          <h3 className='home-main3-h3'>Need talent for your project? We've got you covered.</h3>
          <button className='home-btn2'>View All <img className='home-img2' src='./images/right-arrow-of-straight-thin-line.png' /></button>

        </div>
        <div className="home-container3">
          <div className="div_img">
          <img src='./images/kid-6620283_1280.jpg'/>
          </div>
          <div className="div_img">
          <img src='./images/kid-1241817_1280.jpg'/>
          </div>
          
          <div className="div_img">
          <img src='./images/child-807547_1280.jpg'/>
          </div>
          
        </div>

        <div className="home-main4">
        <div className="home-container4">
          <div className="home-info4">
          <p>Explore a world of talent for your project! From actors to models, voice-over artists, freelancers, and crew memebers, find your perfect fit to bring your project to life with flair and finesse.</p>
          </div>
          
          <button className='home-btn4'>Post a Job</button>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Home
