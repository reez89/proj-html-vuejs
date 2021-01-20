let app = new Vue({
    el: '#app',
    data:{
        highPerformanceTitle:'high performance facilities',
        divider:'./assets/img/divider-xx-red.png',
        dividerWhite:'./assets/img/divider-white-xx.png',
        motivational:`“ I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times ”`,
        quoteOfTheDay:`BRUCE LEE • QUOTE OF THE DAY`,
        trainersTitle:`meet our trainers`,
        performersTitle: `performace news`,
        headerImage: './assets/img/gym_logo_1x.png',
        formImage:'./assets/img/home_img-compressor-400x222.jpg',
        navLinks:[
            {
                link : 'home',
            },
            {
                link: 'about',
            },
            {
                link: 'facilities',
            },
            {
                link: 'membership',
            },
            {
                link: 'testimonials',
            },
            {
                link: 'blog'
            }
        ],
        activityCards:[
            {
                icon:`fas fa-unlink`,
                img:'./assets/img/divider-x-red.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.'
            },
            {
                icon:`fas fa-bicycle`,
                img:'./assets/img/divider-x-red.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.'
            },
            {
                icon:`fab fa-skyatlas`,
                img:'./assets/img/divider-x-red.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.'
            },
            {
                icon:`fas fa-heartbeat`,
                img:'./assets/img/divider-x-red.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us.'
            }
        ],
        worldResults:[
            {
                img:`./assets/img/review_1-compressor.jpg`,
                txt:`“The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!”`,
                author:`– Tara Smith`
            },
            {
                img:`./assets/img/review_3-compressor-2.jpg`,
                txt:`“The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.”`,
                author:`– Simon Chel`
            },
            {
                img:`./assets/img/review_2-compressor.jpg`,
                txt:`“The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.”`,
                author:`– Jen Wirth`
            },
            {
                img:`./assets/img/review_4-compressor-2.jpg`,
                txt:`“No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers.”`,
                author:`– Jeff Glum`
            },
        ],
        highPerformance:[
            {
                img:`./assets/img/home-image1.jpg`,
            },
            {
                img:`./assets/img/home-image2.jpg`,
            },
            {
                img:`./assets/img/home-image3.jpg`,
            },
            {
                img:`./assets/img/home-image4.jpg`,
            },
            {
                img:`./assets/img/home-image54.jpg`,
            },
            {
                img:`./assets/img/home-image6.jpg`,
            },
        ],
        trainersCard:[
            {
                img:`./assets/img/trainer1-200x148.jpg`,
                name:`Ann baker`,
                profession:`Personal Trainer`,
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.`,
                facebook:`fab fa-facebook-f`,
                twitter:`fab fa-twitter`,
                instagram:`fab fa-instagram`
            },
            {
                img:`./assets/img/trainer3-200x148.jpg`,
                name:`Anne Warren`,
                profession:`Personal Trainer`,
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.`,
                facebook:`fab fa-facebook-f`,
                twitter:`fab fa-twitter`,
                instagram:`fab fa-instagramfab fa-instagram`
            },
            {
                img:`./assets/img/trainer4-200x148.jpg`,
                name:`Peter Rice`,
                profession:`Personal Trainer`,
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.`,
                facebook:`fab fa-facebook-f`,
                twitter:`fab fa-twitter`,
                instagram:`fab fa-instagram`
            },
        ],
        performanceCard:[
            {   
                img:'./assets/img/blog1-200x104.jpg',
                title:'Train with free weights or your body weight?',
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]`
            },
            {
                img:'./assets/img/blog6-200x200.jpg',
                title:'Nutritional advice that will keep you training',
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]`
            },
            {
                img:'./assets/img/trainer4-200x148.jpg',
                title:'Simple principles for your next workout',
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]`
            },
            {
                img:'./assets/img/blog4-200x144.jpg',
                title:'To be number one, train like you’re number two',
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]`
            },
            {
                img:'./assets/img/trainer3-200x148.jpg',
                title:'Top 5 mistakes every gym member makes',
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]`
            },
            {
                img:'./assets/img/trainer1-200x148.jpg',
                title:'The myths of shedding body fat explored',
                description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]`
            },
        ]
    }
})