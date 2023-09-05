document.querySelectorAll('.catalog__info-count-plus').forEach(item => {
    item.addEventListener('click', function () {
        ++item.parentElement.querySelector('input').value;
        if (item.parentElement.querySelector('input').value > 1) {
            item.parentElement.querySelector('.catalog__info-count-minus').classList.remove('inactive');
        }
    });
});

document.querySelectorAll('.catalog__info-count-minus').forEach(item => {
    item.addEventListener('click', function () {
        --item.parentElement.querySelector('input').value;
        if (item.parentElement.querySelector('input').value < 2) {
            item.parentElement.querySelector('input').value = 1
            item.classList.add('inactive');
        }
    });
});

const reviews = new Swiper('.reviews__swiper', {
    spaceBetween: 20,
    grabCursor: true,

    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },

    breakpoints: {
        0: {
            loop: true,
            slidesPerView: 1.5
        },

        600: {
            slidesPerView: 1
        }
    }
});

const staff = new Swiper('.staff__swiper', {
    spaceBetween: 20,
    grabCursor: true,

    navigation: {
        nextEl: '.staff__next',
        prevEl: '.staff__prev',
    },

    breakpoints: {
        0: {
            loop: true,
            slidesPerView: 1.5
        },

        600: {
            slidesPerView: 1
        },

        700: {
            slidesPerView: 2
        },

        1000: {
            slidesPerView: 3
        },
        
        1100: {
            slidesPerView: 4
        }
    }
});

const works = new Swiper('.works__swiper', {
    spaceBetween: 20,
    grabCursor: true,

    navigation: {
        nextEl: '.works__next',
        prevEl: '.works__prev',
    },

    breakpoints: {
        0: {
            loop: true,
            slidesPerView: 1.5
        },

        600: {
            slidesPerView: 1
        },

        700: {
            slidesPerView: 2
        },

        1000: {
            slidesPerView: 4
        }
    }
});