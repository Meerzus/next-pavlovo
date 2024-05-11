import React from 'react';

import './FirstSection.sass'
import Image from "next/image";

import logo from '@/public/images/igrolend/logo.webp'
import logoIgrolend from '@/public/images/igrolend/banner.webp'
import banner from '@/public/images/dragons-dungeon/hero-banner.jpg'
import banner_small from '@/public/images/dragons-dungeon/hero-banner-small.jpg'
import Link from "next/link";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

function FirstSection({igrolend}) {
    return (
        <section id={'first-section'} className={igrolend && 'first-igrolend'}>
            <div className="first-section-background">
                {
                    igrolend ? <Image src={logoIgrolend} alt={'Игролэнд'} width={1920} height={1080}/>
                        : <Image src={banner} alt={'Подземелье Дракона'} width={1920} height={1080}/>
                }
            </div>

            {
                igrolend ? <h1>Добро пожаловать!</h1>
                    : <h1>Добро пожаловать в <span id={'dragon'}>Подземелье Дракона</span> в городе Павлово!</h1>
            }

            {
                igrolend && <Image src={logo} alt={'Игролэнд'} width={1080} height={720}/>
            }

            {
                igrolend ?
                    <h3>Пространство <span id={'dragon'}>незабываемых праздников и развлечений </span> для детей и их
                        родителей</h3>
                    : <h3><span id={'dragon'}>Осторожно! </span> Вас ждет взрыв эмоций и неповторимые впечатления!</h3>
            }

            {/*<Link href={'tel:+79101448287'}><h4>Связаться с нами</h4></Link>*/}

            <LeadTriggerButton text={'Оставить заявку'}/>
        </section>
    );
}

export default FirstSection;