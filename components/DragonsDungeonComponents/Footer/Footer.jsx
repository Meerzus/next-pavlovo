import React from 'react';

import './Footer.sass'
import Image from "next/image";

import logo from '@/public/images/logo.png'
import igrolendLogo from '@/public/images/igrolend/logo.webp'
import Link from "next/link";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

function Footer({igrolend}) {
    return (
        <footer className={igrolend && 'igrolend-color'}>
            <div className="item">
                {
                    igrolend ? <Image src={igrolendLogo} alt={'Игролэнд'} width={640} height={480} id={'igrolend-footer-img'}/>
                        : <Image src={logo} alt={'Подземелье Дракона'} width={100} height={50}/>
                }
            </div>

            <nav>
                <Link href={'#events'}>Мероприятия</Link>
                <Link href={'#about-us'}>О нас</Link>
                <Link href={'#ages'}>Возраст</Link>
                <Link href={'#program'}>Программа</Link>
                <Link href={'#contacts'}>Контакты</Link>
            </nav>

            <div className="item">
                <Link href={'tel:+79101448287'}>+7 (910) 144-82-87</Link>

                {
                    igrolend ? <p>Нижегородская улица, 5А, Павлово</p>
                        : <p>Красноармейская улица, 29, Павлово</p>
                }
            </div>

            <div className="item">
                <LeadTriggerButton text={'Оставить заявку'}/>
            </div>

            <div id={'contact-dev'}>
                <Link href={'https://t.me/meerzus'} target={'_blank'}>Разработка сайта</Link>
            </div>
        </footer>
    );
}

export default Footer;