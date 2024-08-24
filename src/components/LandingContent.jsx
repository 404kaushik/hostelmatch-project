import styled from 'styled-components';
import pic1 from '../assets/landing-1.avif';
import pic2 from '../assets/landing-2.webp';
import pic3 from '../assets/landing-3.webp';
import pic4 from '../assets/landing-4.jpg';
import landing5 from '../assets/landing-5.webp';
import pic26 from '../assets/world.png';
import '../components/LandingContent.css';

const LandingContent = () => {
    // const assets_root = constants.assets_root;
    const assets_root = '../assets/';

    return (
      <div className="">
        <div className="max-w-7xl md:w-[76rem] mx-auto text-center md:text-left mt-8 md:mt-0 md:py-4">    
          <h1 class="text-sun-300 text-3xl md:text-4xl font-bold font-sans md:ml-2">
            Top Destinations
          </h1>
          <p class="text-xs md:text-base font-sans py-2 md:ml-2">
            Explore some of the most popular destinations worldwide!
              <br />                                
          </p>
        </div>
          <div className='w-full flex flex-nowrap overflow-x-auto sm:items-center sm:justify-center font-poppins font-normal py-2 md:py-0 hide-scrollbar'>         
          <section className="landing-content ">
          <div class="card">
          <div class="card__img">  
            <img src={pic1} alt="Seville Spain" className="landing-content-img"/>
              <span>4.8</span>
            <div class="w-auto h-8 absolute bottom-2 flex items-center justify-center text-white bg-black rounded-[30px] text-xs m-2 p-5">
              Seville, Spain
            </div>
            </div>
          </div>
          <div class="card">
            <div class="card__img">  
              <img src={pic2} alt="Barcelona, Spain" className="landing-content-img"/>
              <span>4.9</span>
              <div class="w-auto h-8 absolute bottom-2 flex items-center justify-center text-white bg-black rounded-[30px] text-xs m-2 p-5">
              Barcelona, Spain
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__img">  
              <img src={pic3} alt="Banff, Canada " className="landing-content-img"/>
              <span>4.6</span>
              <div class="w-auto h-8 absolute bottom-2 flex items-center justify-center text-white bg-black rounded-[30px] text-xs m-2 p-5">
                Banff, Canada
              </div>
            </div>
          </div>
          <div class="card" id="first-card">
            <div class="card__img">  
              <img src={pic4} alt="Bacalar, Mexico" className="landing-content-img"/>
              <span>4.2</span>
              <div class="w-auto h-8 absolute bottom-2 flex items-center justify-center text-white bg-black rounded-[30px] text-xs m-2 p-5">
                Bacalar, Mexico
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__img">  
              <img src="https://hips.hearstapps.com/hmg-prod/images/aerial-view-of-downtown-miami-florida-royalty-free-image-1626890577.jpg?resize=1200:*" alt="Miami, USA" className="landing-content-img"/>
              <span>4.6</span>
              <div class="w-auto h-8 absolute bottom-2 flex items-center justify-center text-white bg-black rounded-[30px] text-xs m-2 p-5">
                Miami, USA
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__img">  
              <img src="https://media1.thrillophilia.com/filestore/71k8unuo56buabwkbweyt5d3fo8e_shutterstock_519559273.jpg?w=auto&h=600" alt="Honolulu, USA" className="landing-content-img"/>
              <span>4.6</span>
              <div class="w-auto h-8 absolute bottom-2 flex items-center justify-center text-white bg-black rounded-[30px] text-xs m-2 p-5">
                Honolulu, USA
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
  )
}

export default LandingContent;