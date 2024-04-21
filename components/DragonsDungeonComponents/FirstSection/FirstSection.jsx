import React from 'react';

import './FirstSection.sass'
import Image from "next/image";

import logo from '@/public/images/logo.png'
import banner from '@/public/images/dragons-dungeon/hero-banner.jpg'
import banner_small from '@/public/images/dragons-dungeon/hero-banner-small.jpg'
import Link from "next/link";

function FirstSection(props) {
    return (
        <section id={'first-section'}>
            <div className="first-section-background">
                <Image src={banner} alt={'Подземелье Дракона'} width={1920} height={1080}/>
            </div>

            <h1>Добро пожаловать в <span id={'dragon'}>Подземелье Дракона</span> в городе Павлово!</h1>

            <h3>
                <span id={'dragon'}>Осторожно! </span> Вас ждет взрыв эмоций и неповторимые
                впечатления!</h3>

            {/*<Image src={logo} alt={'Подземелье Дракона'} width={640} height={480}/>*/}

            <Link href={'tel:+79101448287'}><h4>Связаться с нами</h4></Link>
        </section>
    );
}

export default FirstSection;