import React, { Component ,useEffect ,useState} from 'react';
import { useTranslation } from "react-i18next";
import "./home.css";
import {BsXDiamondFill ,BsFillQuestionCircleFill} from "react-icons/bs";
import {GiArtificialHive} from "react-icons/gi";
import {ImPriceTags} from "react-icons/im";
import {MdOutlineVerifiedUser} from "react-icons/md";
import {HiStatusOffline} from "react-icons/hi";
import {VscVersions} from "react-icons/vsc";
import {FaArrowCircleUp} from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
const Home = () => {
    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
      const languageValue = e.target.value;
      i18n.changeLanguage(languageValue);
    }  

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    const scroll = () => {
      document.getElementById('about').scrollIntoView();
    }

    return (
        <>
        <center>
        <div className='home-container'>
            <h1 className="my-2" style={{color:'white'}}>{t('Home Page')}</h1>
            <button className="btn btn-primary my-4" onClick={scroll}>{t('Get Started')}</button>
        </div>
        </center>
        <div className="container" id="about">
        <center>
            <h1 className="aboutTitle my-3">{t('About The Products')}</h1>
            <p style={{backgroundColor:' #d9d9d9' , borderRadius:'10px',fontSize:'1.2em', fontFamily:'tahoma'}}>
            {t('We make product that can feel safer to you by recognizing accidents, death, hurt, car crashes, and other interesting things. With this product, you can live more securely, and if you want you can use our “Image Selector” to help yourself manually.')}
            <br/>
            {t('Hope you enjoy')} 
            </p>
            <h2 className="my-4" style={{fontSize:'1.2em'}}>{t('Key features of our products')}</h2>
        </center>
        <div className='cards'>
            <div className="row">
                <div className='col-4'>
                    <div className="card" style={{width:'20em', marginRight:'2em',marginLeft:'2em'}}>
                        <center>
                            <h5>{t('Design')}</h5>
                            <BsXDiamondFill size='5em'style={{marginTop:'1em'}}/>
                        </center>
                        <div className="card-body">
                            <p className="card-text" style={{textAlign:'center'}}>{t('Making something different that anyone can use in easiest way without any knowledge')}</p>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="card" style={{width:'20em',marginRight:'2em',marginLeft:'2em'}}>
                        <center>
                            <h5>{t('AI')}</h5>
                            <GiArtificialHive size='5em'style={{marginTop:'1em'}}/>
                        </center>
                        <div className="card-body">
                            <p className="card-text" style={{textAlign:'center'}}> {t('With Artificial intelligence, we recongnize any accident that may happen to you')}</p>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="card" style={{width:'20em',marginRight:'2em',marginLeft:'2em'}}>
                        <center>
                            <h5>{t('Price')}</h5>
                            <ImPriceTags size='5em'style={{marginTop:'1em'}}/>
                        </center>
                        <div className="card-body">
                            <p className="card-text" style={{textAlign:'center'}}>{t('Dont Worry ! we have a lot of plans and services with different prices for you and your health')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
</div>

<center>
    <h4 className='FAQ'>{t('FAQ')}</h4>
  <div id="accordion">
    <div className="card">
    {i18n.language == 'en' ? (
      <div className="card-header">
          <MdOutlineVerifiedUser size={20} color='green' />  
        <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
          {t('How we can use this platform ?')}
        </a>
      </div>
    ) : (
      <div className="card-header">
        <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
          {t('How we can use this platform ?')}
        </a>
        <MdOutlineVerifiedUser size={20} color='green' />  
      </div>
    )}
      <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
        <div className="card-body">
          {t('Just download the program and then install it on your device')}
        </div>
      </div>
    </div>
    <div className="card">
    {i18n.language == 'en' ? (
      <div className="card-header">
      <HiStatusOffline size={20} color='red'/>
        <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
          {t('Can we use in offline mode ?')} 
        </a> 
      </div>
    ) : (
    <div className="card-header">
    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
      {t('Can we use in offline mode ?')} 
    </a> 
    <HiStatusOffline size={20} color='red'/>
  </div>)}
      <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          {t('Yes, You can use the application without access to the internet')}
        </div>
      </div>
    </div>

    <div className="card">
      {i18n.language == 'en' ? (
          <div className="card-header">
              <VscVersions size={20} color='blue'/>
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                  {t('is it possible to use platform in Demo version ?')}
              </a>
          </div>
          ) : (
            <div className="card-header">
            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                {t('is it possible to use platform in Demo version ?')}
            </a>
            <VscVersions size={20} color='blue'/>
        </div>
          )}
          <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
                  {t('Yes, we put a demo version to test the application and test part of that')}
              </div>
          </div>
      </div>
  </div>
</center>
<h3 style={{textAlign:'center'}} className='my-4'>{t('Contact Us')} </h3>
<div className="container">
    {i18n.language == 'en' ? (
    <div className="container-form">
        <form action="">
        <div className="mb-3 mt-3">
            <label for="email" className='email-field'> {t('Email :')} </label>
            <input type="email" id="email" placeholder="Enter email" name="email"/>
        </div>
        <label for="name">Name :</label>
            <input type="text" id="name" name="name" placeholder="Your name.."/>
            <label for="country">City :</label>
        <select id="country" name="country" className='selected'>
            <option value="Tehran">Tehran</option>
            <option value="Mashhad">Mashhad</option>
            <option value="Esfahan">Esfahan</option>
            <option value="Tabriz">Tabriz</option>
            <option value="Shiraz">Shiraz</option>
            </select>
            
            <label for="subject">Subject :</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
            <input type="submit" value="Submit"/>
        </form> 
    </div> 
    ):(
      <div className="container-form" style={{direction:'rtl'}}>
        <form action="">
        <div className="mb-3 mt-3">
          <label for="email" className='email-field'> ایمیل : </label>
          <input type="email" id="email" placeholder="ایمیل خود را وارد کنید " name="email"/>
        </div>
        <label for="name" >نام : </label>
            <input type="text" id="name" name="name" placeholder="نام خود را وارد کنید "/>
            <label for="country"> شهر :</label>
        <select id="country" name="country" className='selected'>
          <option value="australia">تهران</option>
          <option value="canada">مشهد</option>
          <option value="usa">اصفهان</option>
          <option value="usa">تبریز</option>
          <option value="usa">شیراز</option>
        </select>
            
            <label for="subject">عنوان :</label>
            <textarea id="subject" name="subject" placeholder="مطلب خود را بنویسید . . ." style={{height:'200px'}}></textarea>
            {i18n.language == 'en' ? (
            <input type="submit" value="Submit"/> 
            ) : (
              <input type="submit" value="تایید"/> 
              )}
        </form> 
    </div>
    )}
    <center>
        <h3 className='my-3'> {t('Social Media :')}  </h3>
        <SocialIcon url='https://instagram.com' className='my-4 mx-2'/>
        <SocialIcon url='https://telegram.com' className='my-4 mx-2'/>
        <SocialIcon url='https://youtube.com' className='my-4 mx-2'/>
        <SocialIcon url='https://github.com' className='my-4 mx-2'/>
    </center>
    {i18n.language == 'en' ? (
        <FaArrowCircleUp onClick={scrollToTop} color='green' style={{display: visible ? 'inline' : 'none', 
            position: 'fixed', 
            width: '100%',
            left: '48%',
            bottom: '20px',
            height: '40px',
            fontSize: '5rem',
            cursor: 'pointer'}} 
        />
        ) : (
          <FaArrowCircleUp onClick={scrollToTop} color='green' style={{display: visible ? 'inline' : 'none', 
          position: 'fixed', 
          width: '100%',
          left:'-48%',
          bottom: '20px',
          height: '40px',
          fontSize: '5rem',
          cursor: 'pointer'}} 
          />
        )}
</div>

  </> 
  );
}
 
export default Home;