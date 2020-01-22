    /* Typewritter JS Start Here */
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
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
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    /* Typewritter JS End Here */

    /* Smooth Scroll JS Start Here */
    $('#nav a').click(function(e){
        e.preventDefault();
        var hash = this.hash;
        var position = $(hash).offset().top;
        $('html').animate({
            scrollTop : position
        },800);
    });
    /* Smooth Scroll JS End Here */

    /* MixIt Up JS Start Here */
    var containerEl = document.querySelector('.portfolio-images');
    var mixer = mixitup(containerEl);
    /* MixIt Up JS End Here */

    /* FancyBox JS Start Here */
    $("[data-fancybox]").fancybox({
        // Options will go here
    });
    /* FancyBox JS End Here */

    /* Owl Carousel JS Start Here */
    $(document).ready(function() {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    });
    /* Owl Carousel JS End Here */