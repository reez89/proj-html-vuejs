let app = new Vue({
    el: '#app',
    data:{
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
    }
})