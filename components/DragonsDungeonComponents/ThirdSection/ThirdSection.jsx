import React from 'react';

import './ThirdSection.sass'

import image from '@/public/images/dragons-dungeon/third-section.jpg'
import Image from "next/image";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

function ThirdSection(props) {
    return (
        <section id={'about-us'}>
            <Image src={image} alt={''} width={1080} height={720}/>

            <div className="container">
                <h1><span id="dragon">О нас</span></h1>

                <p>
                    Мы – захватывающая игра-шоу<span id="dragon"> Подземелье Дракона!</span>
                </p>

                <p>
                    Ведущий организатор волшебных мероприятий в г. Павлово. Ведь наш опыт
                    <span id="dragon"> совершенно уникален и не имеет границ.</span>
                </p>

                <p>
                    Наши ведущие и аниматоры - настоящие <span id="dragon"> профессионалы своего дела</span>, чья цель -
                    создать для вас и ваших гостей незабываемый опыт. Мы гордимся своим коллективом талантливых
                    артистов и аниматоров, которые с легкостью погрузят вас в мир
                    <span id="dragon"> фантазии и приключений.</span>
                </p>

                <p>
                    Успешная работа с любыми возрастными группами и типами событий, от дней рождений до корпоративных
                    мероприятий. <span id="dragon">Атмосфера веселья и волшебства, </span>благодаря профессиональной
                    работе наших замечательных ведущих. Они с легкостью погрузят вас в<span id="dragon"> мир фантазий
                    и приключений!</span>
                </p>

                <p>
                    Вы готовы отправиться в захватывающее путешествие, полное загадок и веселья? <br/>
                    <span id="dragon"> Тогда скорее следуй за нами в Подземелье Дракона!</span>
                </p>

                <LeadTriggerButton text={'подарите себе незабываемый праздник'}/>
            </div>
        </section>
    );
}

export default ThirdSection;