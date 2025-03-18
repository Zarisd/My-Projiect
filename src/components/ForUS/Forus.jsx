import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import s from "./Forus.module.scss";
import Card from "../Card/Card";

const reviews = [
  {
    text: "Брали велосипеды на целый день, все прошло отлично! Велики в хорошем состоянии, прокат оформили быстро. Катались по парку – получили море удовольствия!",
    author: "Павел Подвохов"
  },
  {
    text: "Арендовал электросамокат, чтобы быстро добираться до работы. Удобно, зарядки хватило на несколько поездок. Теперь буду пользоваться регулярно",
    author: "Иван Говновозов"
  },
  {
    text: "Катались на сапбордах с друзьями, все оборудование было чистым и исправным. Отличный способ провести выходные на воде!",
    author: "Смирнова Ольга"
  },
  {
    text: "Брали каяки в аренду – суперский опыт! Менеджеры всё объяснили, дали спасательные жилеты. Прекрасно провели время!",
    author: "Кузнецова Дарина"
  },
  {
    text: "Очень приятно видеть, что у вас есть транспорт для людей с ограниченными возможностями. Взяли напрокат для папы, он остался доволен – комфортно и удобно.",
    author: "Иван Золо"
  },
  {
    text: "Электросамокат оказался спасением в городе! Быстро, просто и без пробок. Единственный минус – хотелось бы чуть больше станций аренды.",
    author: "Федорова Елена"
  },
  {
    text: "Отличный сервис! Взяли велосипеды всей семьёй, персонал помог с настройкой, дали шлемы. Всё продумано до мелочей!",
    author: "Андрей Барсуков"
  },
  {
    text: "Прокат каяков порадовал – удобные сиденья, лёгкие весла, красивый маршрут по реке. Обязательно вернусь ещё!",
    author: "Иосиф Сталин"
  }
];

const Forus = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.aboutSection}>
        <div className={s.textContent}>
          <h1>О нас</h1>
          <p className={s.text}>
            BikePark — это удобный и надежный сервис аренды в самом сердце Ташкента, созданный для тех, кто любит движение, 
            свободу и активный отдых. Мы предлагаем в прокат не только велосипеды, но и электросамокаты, сапборды, каяки, 
            тренажеры, а также транспорт для людей с ограниченными возможностями
          </p>
          <p>
           Тысячи довольных клиентов уже оценили наш высокий уровень сервиса, простоту оформления
           аренды и быструю доставку. Нам доверяют, о нас оставляют только положительные отзывы, 
           ведь мы заботимся о каждом, кто выбирает BikePark. В комплект к велосипеду мы бесплатно
           предоставляем все необходимое для комфортной и безопасной поездки.
          </p>

          <p>
            Ташкент — город, который вдохновляет на новые открытия, и с BikePark ты сможешь исследовать 
            его без лишних забот! Будь в движении, наслаждайся свободой и доверься сервису, которому доверяют тысячи! 
          </p>
        </div>
        <Card />
      </div>


      <div className={s.reviewsSection}>
        <h2>Отзывы</h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          spaceBetween={20}
          loop={true}
       
          modules={[EffectCoverflow]}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          className={s.slider}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 20 },
        
            700: { slidesPerView: 1, spaceBetween: 0 }, // 📌 Только 1 отзыв при 700px и ниже
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={s.reviewCard}>
              <p>{review.text}</p>
              <span className={s.author}>{review.author}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Forus;
