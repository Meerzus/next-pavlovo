import React from 'react';

import './SecondSection.sass'
import ProductCard from "@/components/DragonsDungeonComponents/SecondSection/ProductCard";

import image from '@/public/images/dragons-dungeon/image.png'
import kids_birthday from '@/public/images/dragons-dungeon/kids_birthday.jpg'
import adult_birthday from '@/public/images/dragons-dungeon/adult_birthday.jpg'
import holidays from '@/public/images/dragons-dungeon/holidays.jpg'
import graduation from '@/public/images/dragons-dungeon/graduation.jpg'
import teambuilding from '@/public/images/dragons-dungeon/teambuilding.jpg'
import fam_weekend from '@/public/images/dragons-dungeon/fam_weekend.jpg'

import ProductBackground from "@/components/DragonsDungeonComponents/SecondSection/ProductBackground";

const products = [
    {
        id: 1,
        title: 'Детские дни рождения',
        image: kids_birthday,
        description: 'Отпразднуйте день рождения вашего ребенка вместе с нами и сделайте этот день по-настоящему волшебным! В "Подземелье Дракона" каждый день рождения становится настоящим приключением, полным веселья и волшебства. Создайте незабываемые воспоминания вместе с нами в "Подземелье Дракона"!'
    },
    {
        id: 2,
        title: 'Взрослые дни рождения',
        image: adult_birthday,
        description: 'Празднуйте свой день рождения в уникальном стиле в "Подземелье Дракона" и создайте воспоминания, которые будут дороги вам на всю жизнь! Наша команда готова сделать ваш праздник по-настоящему незабываемым. Отметьте свой особенный день вместе с нами в "Подземелье Дракона" и отпразднуйте свой день рождения так, как вы этого заслуживаете!'
    },
    {
        id: 3,
        title: 'Каникулы',
        image: holidays,
        description: 'Проведите каникулы вместе с нами! Наши увлекательные мероприятия сплотят ваш класс и помогут каждому участнику проявить себя. Испытания с животными, интерактивные лабиринты и веселые задания создадут незабываемую атмосферу праздника и веселья. Создайте сказочные моменты, которые останутся с вами на всю жизнь!'
    },
    {
        id: 4,
        title: 'Выпускной',
        image: graduation,
        description: 'Подарите своим выпускникам незабываемый и волшебный выпускной в "Подземелье Дракона"! Мы приглашаем вас и ваших друзей окунуться в мир приключений и веселья, чтобы отпраздновать окончание года в самом захватывающем стиле. Отпразднуйте окончание года в "Подземелье Дракона" и создайте незабываемые моменты, которые будут дороги вам на всю жизнь!'
    },
    {
        id: 5,
        title: 'тимбилдинг',
        image: teambuilding,
        description: 'Погрузитесь в атмосферу веселья и приключений вместе с вашей командой на корпоративе или тимбилдинге в "Подземелье Дракона"! Мы предлагаем уникальные мероприятия, которые помогут укрепить командный дух, повысить эффективность работы коллектива и создать незабываемые впечатления. Отметьте ваш корпоратив или тимбилдинг в "Подземелье Дракона" и создайте незабываемые моменты, которые укрепят вашу команду и останутся с вами на долгие годы!'
    },
    {
        id: 6,
        title: 'Семейные выходные',
        image: fam_weekend,
        description: 'Отправляйтесь вместе с вашей семьей в захватывающее приключение в "Подземелье Дракона" и проведите незабываемые выходные вместе! Наши мероприятия подарят вам и вашим близким массу веселья, радости и волнения. Отпразднуйте ваш семейный уик-энд в "Подземелье Дракона" и создайте незабываемые моменты, которые будут дороги вам на всю жизнь!'
    },
]

// дни рождения, выпускные, праздники, корпоративы

function SecondSection(props) {
    return (
        <section id={'events'}>
            <ProductBackground/>
            <h3>
                Повод с вашей стороны, эмоции с нашей! В <span id="dragon">Подземелье Дракона</span> каждое мероприятие
                становится незабываемым!
            </h3>

            {
                products.map(product => {
                    return <ProductCard product={product} key={product.id}/>
                })
            }
        </section>
    );
}

export default SecondSection;