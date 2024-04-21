import React from 'react';

import './ChooseUsSection.sass'

import idea from '@/public/images/dragons-dungeon/svg/idea.svg'
import format from '@/public/images/dragons-dungeon/svg/format.svg'
import happy from '@/public/images/dragons-dungeon/svg/happy.svg'
import baby from '@/public/images/dragons-dungeon/svg/baby.svg'
import balloons from '@/public/images/dragons-dungeon/svg/balloons.svg'
import guard from '@/public/images/dragons-dungeon/svg/guard.svg'
import Image from "next/image";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

const data = [
    {
        id: 1,
        title: 'Уникальный формат',
        text: 'Наша уникальность в том, что такого формата праздника Вы больше не найдете ни на одной площадке в городе. "Подземелье Дракона" — это не просто развлечение, это настоящее приключение!',
        icon: idea,
    },
    {
        id: 2,
        title: 'Специальная программа',
        text: 'Игра-шоу направлена на сплочение и объединение гостей праздника. Мы создаем особую атмосферу, где каждый участник чувствует себя частью команды.',
        icon: format,
    },
    {
        id: 3,
        title: 'не дадим заскучать гостям',
        text: 'Мы гарантируем, что наша игра-шоу займет и развлечет абсолютно всех участников. Независимо от возраста, у нас найдется что-то интересное для каждого.',
        icon: happy,
    },
    {
        id: 4,
        title: 'Для всех возрастов',
        text: 'Игра-шоу Подземелье Дракона подходит как для взрослых, так и для детей 7+. Наша профессиональная команда разработает уникальный сценарий, который подойдет именно для вашей группы, учитывая возраст всех участников.',
        icon: baby,
    },
    {
        id: 5,
        title: 'Банкетная зона',
        text: 'Наша уютная банкетная зона вмещает до 30 человек, где вы сможете отдохнуть и насладиться приятным общением после приключений.',
        icon: balloons,
    },
    {
        id: 6,
        title: 'Качество и безопасность',
        text: 'В "Подземелье Дракона" мы гарантируем высокое качество проведения мероприятий и вашу безопасность. Мы работаем для того, чтобы вы ушли с нами только с положительными эмоциями и впечатлениями!',
        icon: guard,
    },
]

function ChooseUsSection(props) {
    return (
        <section id={'chooseUsSection'}>
            <h1>Почему выбрать стоит <span id="dragon">именно нас</span></h1>

            <div className="container">
                {
                    data.map(item => {
                        return <div key={item.id} className={'item'}>
                            <h4>{item.title}</h4>
                            <Image src={item.icon} alt={item.title}/>
                            <p>{item.text}</p>
                        </div>
                    })
                }
            </div>

            <LeadTriggerButton text={'Оставить заявку'}/>
        </section>
    );
}

export default ChooseUsSection;