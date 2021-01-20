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
        ]
    }
})