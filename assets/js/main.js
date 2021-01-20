let app = new Vue({
    el: '#app',
    data:{
        highPerformanceTitle:'high performance facilities',
        divider:'./assets/img/divider-xx-red.png',
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
        ]

    }
})