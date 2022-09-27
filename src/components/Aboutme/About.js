import "./About.css"
import React from 'react'
import portfoliovideo from './portfoliovideo.mp4'
import photolaura from'./photolaura.jpg'
import leaf from './leaf.jpg'
import makeup from './makeup.jpg'


function About () {

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
        <section id="about-section">
                        <div className="abouth1">
                        <h1>About me</h1>
            </div>
            <p className="aboutmep">I am a 24-year old Danish woman from Horsens, Denmark. I am currently studying to become a multimediadesigner at Business Academy Aarhus with a specialty in frontend development.{'\n'}{'\n'}
            In my spare time I like to spend time with friends, play videogames or be in various musicals around the country. I instruct a weekly Zumba Fitness class, and enjoy everything within performance arts like singing, dancing and acting.{'\n'}{'\n'}
            When I'm not out having fun, I earn my keep as a waiter at Café Gran in Horsens, or help out as a student worker at accountant firm Roesgaard. </p>
            <div className="abouth11">
                        <h1>Hard Skills</h1>
            </div>
            <p className="abouthard">Being a student I am continuously developing and working on my hard skills, some of which include:{'\n'}
            • Knowledge of HTML, CSS, JavaScript and React.{'\n'}
            • Knowledge of Adobe XD{'\n'}
            • Acquaintance with Adobe Photoshop, Illustrator, Premiere Pro{'\n'}
            Throughout my school year I've been introduced to and gotten experience with user research, UX/UI design and managing projects from idea to final result.
            </p>
            <div className="abouth111">
                        <h1>Soft Skills</h1>
            </div>
            <p className="aboutsoft">I have always shown to dedicate myself to a project 100%, no matter the importance, big or small.
             I am simply not wired to not want it to be the best it can be, and to exploit all of its potential, and therefore sometimes can be overcomitted.
             I am loyal, dedicated and hardworking in everything I do, and good service and win-wins are my bread and butter. I am also embarrassingly structured and orderly in my work, which must be why I find the enjoyments and frustrations of coding so intriguing.
             Ever since I was little, I've always kept order in my work... and the mess in my room.
             {'\n'} {'\n'}
             The 16 personalities test categorizes me as an ISFJ-A Defender, and I've found a few words I think help describe who I am:{'\n'}
             • Patient{'\n'}
             • Comitted{'\n'}
             • Reliable{'\n'}
             • Caring{'\n'}
             • An eye for detail{'\n'}
             • Responsible</p>
             <div className="abouth1111">
                        <h1>What are my dreams?</h1>
            </div>
            <p className="aboutdreams">I am looking to become an incredibly skillfull frontend developer - but still with passion for everything within multimedia.{'\n'} {'\n'}
            I am looking to learn and acquire new skills in a friendly and supporting enviroment, to help me become a good asset for any company, or so that I one day can start my own.
             Even though I am working on becoming a frontend developer at my study, I still want to be proficient within the entire palette. I still love to take and edit photos and video.
             I love producing, writing, and designing content for webapplications and other user interfaces.{'\n'}{'\n'}
             My dream job would be within multimedia and to have a workplace where the days and tasks differ, where I can be member of a skillful team, and get to be creative.</p>
            <div>
            <video autoPlay loop muted>
                <source src={portfoliovideo} type="video/mp4" />
            </video>
            </div>
            <div>
                <img className="photo-laura" alt="laurakbh" src={photolaura}></img>
            </div>
            <div>
                <img className="photo-leaf" alt="bladfjer" src={leaf}></img>
            </div>
            <div>
                <img className="photo-makeup" alt="makeup" src={makeup}></img>
            </div>
            <article className="Title-about">
            <h1
             class="typewrite" data-period="2000" data-type='[ "Travel.", "Exploration.", "Performing.","Being home.", "Being with friends.", "Learning.", "Being with family.", "Gaming." ]'>
            <span class="wrap"></span>
        </h1> </article>
        </section>
    )
}

export default About;