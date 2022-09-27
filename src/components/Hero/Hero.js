import React from 'react'
import "./Hero.css"
import HeroImg from './laurahero.jpg'


function Hero () {

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 8) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #daa520}";
        document.body.appendChild(css);
    };



    return(
       <section id="hero-section">
        <article className="hero-img">
            <img src={HeroImg} alt="laurahero"></img>
        </article>
        <article className="Title">
            <h1
             class="typewrite" data-period="2000" data-type='[ "Hello there.", "I am Laura Fast.", "Welcome to my portfolio." ]'>
            <span class="wrap"></span>
        </h1>
        <h2>{'\n'} <div className="c1"><div className="type">I am a passionate, hard-working,</div> </div>{'\n'} 
        <div class="c2"><div class="type2">banter-loving, structured,</div></div>{'\n'}
        <div class="c3"><div class="type3">enumerating, independent,</div></div>{'\n'}
        <div class="c4"><div class="type4">and excited-to-learn student of multimedia design.</div></div>{'\n'}
        <div class="c5"><div class="type5"><button className="button-hero" type="button"><span><a href="#about-section">Learn More</a></span></button></div></div>{'\n'}
        </h2>

        </article>


       </section>

       
    )
}

export default Hero;