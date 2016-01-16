window.onload = function() {
    animateLogo();
    animateAndroidRobot();
    updateScrollLinks();
    addSmoothScrolling();
};

function animateLogo() {
    TweenMax.fromTo("#react-logo",2,{
        css: {
            y: "-15px"
        }
    },{
        css: {
            y: "15px"
        },
        repeat: -1,
        yoyo: true,
        ease: Power2.easeInOut,
    }
    );
}
function animateAndroidRobot() {
    var t = new TimelineMax({yoyo:true,repeat:-1});
      t.to("#android-robot",0.3,{rotation: "-35deg"})
        .to("#android-robot",0.5,{rotation: "-45deg"})
        .to("#android-robot",0.3,{rotation: "-55deg"})
        .to("#android-robot",0.5,{rotation: "-45deg"});
}

function updateScrollLinks() {
    var links = document.querySelectorAll("#slider-control a");
    for(var i = 0; i<links.length; i++) {
        var link = links[i];
        var section = document.querySelector(".section"+(i+1));
        var sectionTop = section.offsetTop;
        var sectionBottom = section.offsetTop + section.offsetHeight;
        if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            link.className="active";
        } else {
            link.className="";
        }
    }
}

window.onscroll = function() {
    updateScrollLinks();
};

function scrollToElement(element) {
    console.log(element.getAttribute('id'));
    var topOfElement = element.offsetTop;
    console.log(topOfElement);
    TweenMax.to(window,1,{
        scrollTo: {
          y: topOfElement,
        },
        ease: Power2.easeInOut,
    });
}

function addSmoothScrolling() {
    window.links = document.querySelectorAll("#slider-control a");

    for(var i = 0; i<links.length; i++) {
        (function(){
            var link = links[i];
            var href = link.getAttribute('href');
            link.addEventListener("click",function(event) {
                scrollToElement(document.querySelector(href));
                event.preventDefault();
            });
        })();
    }

}