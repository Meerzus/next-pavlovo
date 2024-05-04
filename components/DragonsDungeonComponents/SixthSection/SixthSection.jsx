import React from 'react';

import './SixthSection.sass'
import Link from "next/link";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";
import DragonMap from "@/components/DragonsDungeonComponents/SixthSection/DragonMap";
import Image from "next/image";

import VK from '@/public/images/icons/VK.svg'
import IgrolendMap from "@/components/DragonsDungeonComponents/SixthSection/IgrolendMap";
// https://yandex.ru/maps/-/CDVzf4oW
function SixthSection({igrolend}) {
    return (
        <section id={'contacts'}>
            <h1>Как нас найти?</h1>

            <div className="item">
                <h4>связаться с нами</h4>

                <Link href={'tel:+79101448287'}>Позвонить нам</Link>

                {
                    igrolend ? <Link href={'https://vk.com/igroland_pavlovo'} target={'_blank'}>Написать в VK</Link>
                        : <Link href={'https://vk.com/im?media=&sel=-216009078'} target={'_blank'}>Написать в VK</Link>
                }

                <h4>приехать к нам</h4>

                {
                    igrolend ? <p>Нижегородская улица, 5А, Павлово</p>
                        : <p>Красноармейская улица, 29, Павлово</p>
                }

                <h4>Наши соц. сети</h4>

                {
                    igrolend ? <Link href={'https://vk.com/igroland_pavlovo'} target={'_blank'}>
                            <Image src={VK} alt={'ВКонтакте'} width={48} height={48}/>
                        </Link>
                        : <Link href={'https://vk.com/dragon_pavlovo'} target={'_blank'}>
                            <Image src={VK} alt={'ВКонтакте'} width={48} height={48}/>
                        </Link>
                }
            </div>

            {
                igrolend ? <div className="item">
                        <IgrolendMap/>
                    </div>
                    : <div className="item">
                        <DragonMap/>
                    </div>
            }

            <div className="any-questions">
            <h3>Остались вопросы?</h3>
                <h4>Оставьте заявку и мы обязательно поможем Вам!</h4>

                <LeadTriggerButton text={'Оставить заявку'}/>
            </div>
        </section>
    );
}

export default SixthSection;