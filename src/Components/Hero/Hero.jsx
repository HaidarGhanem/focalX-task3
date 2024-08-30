import './Hero.css'

const Hero = () => {

    let slideIndex = 1

    function plusSlides(n){
        showSlide(slideIndex += n);
    }

    function currentSlides(n){
        showSlide(slideIndex = n);
    }

    function showSlide(n){
        let i;
        let slides = document.getElementsByClassName('Slides');
        let dots = document.getElementsByClassName('dot');

        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slides.length;
        }

        for(i = 0 ; i < slides.length ; i++ ){
            slides[i].style.display = "none";
        }
        for(i = 0 ; i < dots.length ; i++ ){
            dots[i].className = dots[i].className.replace(" ative","");
        }

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    setTimeout(() => {
        showSlide(slideIndex);
    }, 0);

    return (
        <div className="hero">

        <div className='img'>
            <img className='Slides animation' src="/images/banner-01.jpg" alt="error" />
            <img className='Slides animation' src="/images/banner-02.jpg" alt="error" />
            <img className='Slides animation' src="/images/banner-03.jpg" alt="error" />
        </div>
        
        <div className="content">

            <a className="previous" onClick={()=>plusSlides(-1)}>&#10094;</a>
            <a className="next"onClick={()=>plusSlides(1)}>&#10095;</a>

            <div className='text'>
            <p>Toronto, <span>Canada</span></p>
            <h1>HURRY! GET THE BEST VILLA FOR YOU</h1>
            </div>

            <div className="dots">
                <span className="dot" onClick={()=>currentSlides(1)}></span> 
                <span className="dot" onClick={()=>currentSlides(2)}></span> 
                <span className="dot" onClick={()=>currentSlides(3)}></span> 
            </div>

        </div>

        </div>
    )
}

export default Hero