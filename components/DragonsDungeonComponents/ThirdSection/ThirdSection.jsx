import React from 'react';

import './ThirdSection.sass'

import image from '@/public/images/dragons-dungeon/third-section.jpg'
import igrolendImage from '@/public/images/igrolend/aboutUS.jpeg'
import Image from "next/image";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

function ThirdSection({igrolend}) {
    return (
        <section id={'about-us'} className={igrolend && 'igrolend-color'}>
            {
                igrolend ? <Image src={igrolendImage} alt={'Игролэнд'} width={1080} height={720}/>
                    : <Image src={image} alt={'Подземелье дракона'} width={1080} height={720}/>
            }

            {
                igrolend ? <div className="container">
                        <h1><span id="dragon">О нас</span></h1>

                        <p>
                            Мы — интерактивный парк развлечений, где фантазии становятся реальностью.
                            <br/>
                            У нас каждый найдет что-то особенное для себя!
                        </p>

                        <p>
                            Наши увлекательные аттракционы дополнены захватывающей анимацией и профессиональными
                            аниматорами, создавая неповторимую атмосферу веселья и радости.
                        </p>

                        <p>
                            Погрузитесь в мир увлекательных игр и приключений вместе с Игролэндом — здесь ждут яркие
                            эмоции и впечатления для всей вашей семьи!
                        </p>

                        <LeadTriggerButton text={'подарите себе незабываемый праздник'}/>
                    </div>
                    : <div className="container">
                        <h1><span id="dragon">О нас</span></h1>

                        <p>
                            Мы – захватывающая игра-шоу<span id="dragon"> Подземелье Дракона!</span>
                        </p>

                        <p>
                            Ведущий организатор волшебных мероприятий в г. Павлово.
                            <br/>
                            Ведь наш опыт<span id="dragon"> совершенно уникален и не имеет границ.</span>
                        </p>

                        <p>
                            Успешная работа с любыми возрастными группами и типами событий, от дней рождений до
                            корпоративных
                            мероприятий.
                            <br/>
                            <span id="dragon">Атмосфера веселья и волшебства, </span>благодаря профессиональной
                            работе наших замечательных ведущих. Они с легкостью погрузят вас в<span id="dragon"> мир фантазий
                            и приключений!</span>
                        </p>

                        <p>
                            Вы готовы отправиться в захватывающее путешествие, полное загадок и веселья? <br/>
                            <span id="dragon"> Тогда скорее следуй за нами в Подземелье Дракона!</span>
                        </p>

                        <LeadTriggerButton text={'подарите себе незабываемый праздник'}/>
                    </div>
            }
        </section>
    );
}

export default ThirdSection;