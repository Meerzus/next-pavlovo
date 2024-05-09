import React from 'react';
import Image from "next/image";

import './Header.sass'

import logo from '@/public/images/logo.png'
import logoIgrolend from '@/public/images/igrolend/logo.webp'
import Link from "next/link";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";
import NavToggle from "@/components/DragonsDungeonComponents/Header/NavToggle";
import CallMeHeaderNav from "@/components/DragonsDungeonComponents/Header/CallMeHeaderNav";

function Header({igrolend}) {
    return (
        <header>
            {
                igrolend ? <Image src={logoIgrolend} alt={'Игроленд'} width={100} height={50}/>
                    : <Image src={logo} alt={'Подземелье Дракона'} width={100} height={50}/>
            }

            <nav id={'header-nav'}>
                <Link href={'#events'}>Мероприятия</Link>
                <Link href={'#about-us'}>О нас</Link>
                <Link href={'#chooseUsSection'}>Преимущества</Link>
                <Link href={'#program'}>Программа</Link>
                <Link href={'#contacts'}>Контакты</Link>
                <CallMeHeaderNav/>
            </nav>

            <LeadTriggerButton text={'Перезвоните мне'}/>

            <NavToggle/>
        </header>
    );
}

export default Header;