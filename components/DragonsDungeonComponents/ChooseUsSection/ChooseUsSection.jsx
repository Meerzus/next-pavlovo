import React from 'react';

import './ChooseUsSection.sass'

import idea from '@/public/images/dragons-dungeon/svg/idea.svg'
import format from '@/public/images/dragons-dungeon/svg/format.svg'
import happy from '@/public/images/dragons-dungeon/svg/happy.svg'
import baby from '@/public/images/dragons-dungeon/svg/baby.svg'
import balloons from '@/public/images/dragons-dungeon/svg/balloons.svg'
import guard from '@/public/images/dragons-dungeon/svg/guard.svg'
import reality from '@/public/images/dragons-dungeon/svg/reality.svg'
import Image from "next/image";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";
import Comments from "@/components/DragonsDungeonComponents/ChooseUsSection/Comments";
import IgrolendComments from "@/components/DragonsDungeonComponents/ChooseUsSection/IgrolendComments";

const data = [
    {
        id: 1,
        title: 'Уникальный формат',
        // text: 'Наша уникальность в том, что такого формата праздника Вы больше не найдете ни на одной площадке в городе. "Подземелье Дракона" — это не просто развлечение, это настоящее приключение!',
        text: 'Такого формата праздника Вы больше не найдете ни на одной площадке в городе.',
        icon: idea,
    },
    {
        id: 2,
        title: 'Специальная программа',
        // text: 'Игра-шоу направлена на сплочение и объединение гостей праздника. Мы создаем особую атмосферу, где каждый участник чувствует себя частью команды.',
        text: 'Мы создаем особую атмосферу, где каждый участник чувствует себя частью команды.',
        icon: format,
    },
    {
        id: 3,
        title: 'не дадим заскучать гостям',
        // text: 'Мы гарантируем, что наша игра-шоу займет и развлечет абсолютно всех участников. Независимо от возраста, у нас найдется что-то интересное для каждого.',
        text: 'Мы гарантируем, что наша игра-шоу займет и развлечет абсолютно всех участников.',
        icon: happy,
    },
    {
        id: 4,
        title: 'Для всех возрастов',
        // text: 'Игра-шоу Подземелье Дракона подходит как для взрослых, так и для детей 7+. Наша профессиональная команда разработает уникальный сценарий, который подойдет именно для вашей группы, учитывая возраст всех участников.',
        text: 'Игра-шоу Подземелье Дракона подходит как для взрослых, так и для детей 7+.',
        icon: baby,
    },
    {
        id: 5,
        title: 'Банкетная зона',
        // text: 'Наша уютная банкетная зона вмещает до 30 человек, где вы сможете отдохнуть и насладиться приятным общением после приключений.',
        text: 'Наша уютная банкетная зона вмещает до 30 человек, где вы сможете отдохнуть после приключений.',
        icon: balloons,
    },
    {
        id: 6,
        title: 'Качество и безопасность',
        // text: 'В "Подземелье Дракона" мы гарантируем высокое качество проведения мероприятий и вашу безопасность. Мы работает для того, чтобы Вы  получило только положительные эмоции и впечатления!',
        text: 'Мы работает для того, чтобы Вы  получило только положительные эмоции и впечатления!',
        icon: guard,
    },
]

const igrolendData = [
    {
        id: 1,
        title: 'Интерактивные аттракционы',
        text: 'Наши аттракционы превратят ваш день в увлекательное приключение, которое запомнится надолго!',
        icon: idea,
    },
    {
        id: 2,
        title: 'Зрелищные проекции',
        text: 'Огромные зрелищные проекции, на стенах и полу, создадут невероятную атмосферу и захватят вас в мир фантазий и приключений.',
        icon: format,
    },
    {
        id: 3,
        title: 'Разнообразие аттракционов',
        text: 'У нас есть аттракционы для детей и взрослых, каждый найдет здесь что-то интересное и захватывающее!',
        icon: happy,
    },
    {
        id: 4,
        title: 'Дополненная реальность',
        text: 'Погрузитесь в мир дополненной реальности и почувствуйте себя героем собственной истории!',
        icon: reality,
    },
    {
        id: 5,
        title: 'Профессиональные аниматоры',
        text: 'Наши профессиональные аниматоры сделают ваше пребывание у нас еще более веселым и запоминающимся!',
        icon: guard,
    },
    {
        id: 6,
        title: 'Зона отдыха',
        text: 'Отдохните и насладитесь приятным общением в нашей уютной банкетной зоне после увлекательных приключений!',
        icon: balloons,
    },
];


function ChooseUsSection({igrolend}) {
    return (
        <section id={'chooseUsSection'}>
            <h1>Почему выбрать стоит <span id="dragon">именно нас</span></h1>

            <div className="container">
                {
                    igrolend ? igrolendData.map(item => {
                            return <div key={item.id} className={'item'}>
                                <h4>{item.title}</h4>
                                <Image src={item.icon} alt={item.title}/>
                                <p>{item.text}</p>
                            </div>
                        })
                        : data.map(item => {
                            return <div key={item.id} className={'item'}>
                                <h4>{item.title}</h4>
                                <Image src={item.icon} alt={item.title}/>
                                <p>{item.text}</p>
                            </div>
                        })
                }
            </div>

            <div className="reviews">
                <h2>А вот что говорят наши клиенты</h2>

                {
                    igrolend ? <IgrolendComments/> : <Comments/>
                }

                <LeadTriggerButton text={'Оставить заявку'}/>
            </div>


        </section>
    );
}

export default ChooseUsSection;