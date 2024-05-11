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

// import holid from '@/public/images/igrolend/igrolendHolidays.jpg'
import holid from '@/public/images/igrolend/kanikuli.jpg'
import bd from '@/public/images/igrolend/igrolendBD.jpg'
// import grad from '@/public/images/igrolend/igrolendGraduation.jpg'
import grad from '@/public/images/igrolend/vipusknoy.jpg'
import free from '@/public/images/igrolend/igrolendFreeGame.jpg'
import vip from '@/public/images/igrolend/igrolendVIP.jpg'

import ProductBackground from "@/components/DragonsDungeonComponents/SecondSection/ProductBackground";
import TypeWriter from "@/components/Igrolend/TypeWriter/TypeWriter";

const products = [
    {
        id: 1,
        title: 'Детские дни рождения',
        // image: '/images/dragons-dungeon/kids_birthday.jpg',
        image: kids_birthday,
        description: 'Отпразднуйте день рождения вашего ребенка вместе с нами и сделайте этот день по-настоящему волшебным! В "Подземелье Дракона" каждый день рождения становится настоящим приключением, полным веселья и волшебства. Создайте незабываемые воспоминания вместе с нами в "Подземелье Дракона"!'
    },
    {
        id: 2,
        title: 'Взрослые дни рождения',
        // image: '/images/dragons-dungeon/adult_birthday.jpg',
        image: adult_birthday,
        description: 'Празднуйте свой день рождения в уникальном стиле в "Подземелье Дракона" и создайте воспоминания, которые будут дороги вам на всю жизнь! Наша команда готова сделать ваш праздник по-настоящему незабываемым. Отметьте свой особенный день вместе с нами в "Подземелье Дракона" и отпразднуйте свой день рождения так, как вы этого заслуживаете!'
    },
    {
        id: 3,
        title: 'Каникулы',
        // image: '/images/dragons-dungeon/holidays.jpg',
        image: holidays,
        description: 'Проведите каникулы вместе с нами! Наши увлекательные мероприятия сплотят ваш класс и помогут каждому участнику проявить себя. Испытания с животными, интерактивные лабиринты и веселые задания создадут незабываемую атмосферу праздника и веселья. Создайте сказочные моменты, которые останутся с вами на всю жизнь!'
    },
    {
        id: 4,
        title: 'Выпускной',
        // image: '/images/dragons-dungeon/graduation.jpg',
        image: graduation,
        description: 'Подарите своим выпускникам незабываемый и волшебный выпускной в "Подземелье Дракона"! Мы приглашаем вас и ваших друзей окунуться в мир приключений и веселья, чтобы отпраздновать окончание года в самом захватывающем стиле. Отпразднуйте окончание года в "Подземелье Дракона" и создайте незабываемые моменты, которые будут дороги вам на всю жизнь!'
    },
    {
        id: 5,
        title: 'тимбилдинг',
        // image: '/images/dragons-dungeon/teambuilding.jpg',
        image: teambuilding,
        description: 'Погрузитесь в атмосферу веселья и приключений вместе с вашей командой на корпоративе или тимбилдинге в "Подземелье Дракона"! Мы предлагаем уникальные мероприятия, которые помогут укрепить командный дух, повысить эффективность работы коллектива и создать незабываемые впечатления. Отметьте ваш корпоратив или тимбилдинг в "Подземелье Дракона" и создайте незабываемые моменты, которые укрепят вашу команду и останутся с вами на долгие годы!'
    },
    {
        id: 6,
        title: 'Семейные выходные',
        // image: '/images/dragons-dungeon/fam_weekend.jpg',
        image: fam_weekend,
        description: 'Отправляйтесь вместе с вашей семьей в захватывающее приключение в "Подземелье Дракона" и проведите незабываемые выходные вместе! Наши мероприятия подарят вам и вашим близким массу веселья, радости и волнения. Отпразднуйте ваш семейный уик-энд в "Подземелье Дракона" и создайте незабываемые моменты, которые будут дороги вам на всю жизнь!'
    },
]

const igrolendProducts = [
    {
        id: 1,
        title: 'Каникулы',
        // image: '/images/dragons-dungeon/kids_birthday.jpg',
        image: holid,
        description: 'Проведите незабываемые каникулы вместе с нами в Игролэнде! Выберите один из наших пакетов, включающих увлекательные квесты, дискотеки и мастер-классы, чтобы подарить вашему ребенку яркие и запоминающиеся моменты!'
    },
    {
        id: 2,
        title: 'День рождения',
        // image: '/images/dragons-dungeon/adult_birthday.jpg',
        image: bd,
        description: 'Отметьте день рождения вашего ребенка в Игролэнде и создайте незабываемый праздник! Мы предлагаем разнообразные пакеты услуг, включающие аренду парка, увлекательные квесты, дискотеки, мастер-классы и многое другое, чтобы сделать этот день особенным для вашего ребенка и его друзей!'
    },
    {
        id: 3,
        title: 'Выпускной',
        // image: '/images/dragons-dungeon/holidays.jpg',
        image: grad,
        description: 'Отметьте окончание учебного года ярко и незабываемо в Игролэнде! Мы предлагаем разнообразные пакеты услуг для организации выпускного, включающие увлекательные квесты, дискотеки, мастер-классы и вкусное питание. Создайте незабываемые воспоминания вместе с нами!'
    },
    {
        id: 4,
        title: 'Свободная игра',
        // image: '/images/dragons-dungeon/graduation.jpg',
        image: free,
        description: 'Погрузитесь в мир веселья и приключений в Игролэнде! Насладитесь увлекательными аттракционами, интерактивными играми и квестами. Отличное развлечение для детей и взрослых в любой день недели!'
    },
    {
        id: 5,
        title: 'Тематическая вечеринка',
        // image: '/images/dragons-dungeon/teambuilding.jpg',
        image: vip,
        description: 'Отправьтесь в захватывающее путешествие по миру фантазии и волшебства вместе с нами. Насладитесь неповторимой атмосферой, яркими персонажами и увлекательными мероприятиями, которые запомнятся на всю жизнь!'
    },
    {
        id: 6,
        title: 'Vip',
        // image: '/images/dragons-dungeon/teambuilding.jpg',
        image: vip,
        description: 'Отметьте свой выпускной в Игролэнде с нашим VIP пакетом! Насладитесь увлекательным квестом, захватывающей дискотекой и мастер-классом на ваш выбор, окунитесь в атмосферу веселья и приключений! Празднуйте свой выпускной с комфортом и стилем в нашей чайно-банкетной зоне с профессиональным фотографом, сервировкой стола и вкусным питанием!'
    },
]

function SecondSection({igrolend}) {
    return (
        <section id={'events'}>
            <ProductBackground/>

            {
                igrolend ? <h2>Дети будут в восторге! Праздник в <span id="dragon"> Игролэнде </span> станет
                        незабываемым для Вашего ребенка!</h2>
                    : <h2>
                        Повод с вашей стороны, эмоции с нашей! В <span id="dragon">Подземелье Дракона</span> каждое
                        мероприятие становится незабываемым!
                    </h2>
            }

            {
                igrolend ? igrolendProducts.map(product => {
                        return <ProductCard product={product} key={product.id}/>
                    }) :
                    products.map(product => {
                        return <ProductCard product={product} key={product.id}/>
                    })
            }
        </section>
    );
}

export default SecondSection;