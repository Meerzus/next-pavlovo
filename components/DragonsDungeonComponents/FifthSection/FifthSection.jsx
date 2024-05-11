import React from 'react';

import './FifthSection.sass'
import Image from "next/image";

import image from '@/public/images/dragons-dungeon/image.png'

import labirint from '@/public/images/dragons-dungeon/labirint.jpg'
import disco from '@/public/images/dragons-dungeon/disco.jpg'
import game_show from '@/public/images/dragons-dungeon/game_show.jpg'
import music from '@/public/images/dragons-dungeon/music.jpg'
import animals from '@/public/images/dragons-dungeon/animals.jpg'
import silver_show from '@/public/images/dragons-dungeon/silver_show.jpg'

import akvagrim from '@/public/images/igrolend/akvagrim.jpg'
import krasiva_loc from '@/public/images/igrolend/krasiva_loc.jpg'
import tir from '@/public/images/igrolend/tir.jpg'
import pol from '@/public/images/igrolend/pol.jpg'
import ojiv from '@/public/images/igrolend/ojivshie_risunki.jpg'
import stena_kidala from '@/public/images/igrolend/stena_kidala.jpg'
import master_klass from '@/public/images/igrolend/master_klass.jpg'
import neon_disco from '@/public/images/igrolend/neon_disco.jpg'
import risovanie from '@/public/images/igrolend/risovanie.jpg'

import VK from '@/public/images/icons/VK.svg'

import Video from "@/components/DragonsDungeonComponents/FifthSection/Video";
import Link from "next/link";

function FifthSection({igrolend}) {
    return (
        <section id={'program'} className={igrolend && 'igrolend-color'}>
            {
                igrolend ? <h1>Что вас ждет в Игролэнде</h1>
                    : <h1>Что вас ждет в Подземелье Дракона</h1>
            }

            {
                igrolend ? <div className="item">
                        <Image src={stena_kidala} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Живая стена Кидалка</span>
                            </h4>

                            <p>
                                Представьте себя доблестным рыцарем или..., да впрочем, кем угодно! Берите подушки и
                                в атаку!
                            </p>
                        </div>
                    </div>
                    : <div className="item">
                        <Image src={animals} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Испытания с животными</span>
                            </h4>

                            <p>
                                Игра-шоу - это испытания, которые становятся по-настоящему приключением для гостей. А
                                самое эмоциональное испытание с настоящими животными проверит ваших гостей на силу духа и
                                превратят ваше мероприятие в захватывающий контактный зоопарк.
                            </p>
                        </div>
                    </div>
            }

            {
                igrolend ? <div className="item">
                        <Image src={tir} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Интерактивный Тир</span>
                            </h4>

                            <p>
                                Попробуй себя в роли настоящего снайпера и победи зомбей, троллей с помощью интерактивного бластера
                            </p>
                        </div>
                    </div>
                    : <div className="item">
                        <Image src={labirint} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Лабиринты и задания с габаритным инвентарем</span>
                            </h4>

                            <p>
                                Подготовьтесь к неожиданным поворотам и захватывающим испытаниям в лабиринтах Подземелья
                                Дракона! Увлекательные задания, сопровождаемые габаритным инвентарем, окунут вас в мир
                                загадок и приключений, где каждое решение приводит к новым открытиям и незабываемым
                                впечатлениям.
                            </p>
                        </div>
                    </div>
            }

            {
                igrolend ? <div className="item">
                        <Image src={ojiv} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Ожившие рисунки</span>
                            </h4>

                            <p>
                                Раскрасьте персонажей на листе бумаги и отсканируйте - они оживут в виде больших
                                проекций на стене
                            </p>
                        </div>
                    </div>
                    : <div className="item">
                        <Image src={music} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Музыкальное сопровождение и световые эффекты</span>
                            </h4>

                            <p>
                                Поддайтесь ритму и атмосфере музыки в Подземелье Дракона! Наши музыкальные композиции и
                                световые эффекты создадут уникальную атмосферу загадки и волшебства, добавляя драматизма и
                                веселья к каждому вашему шагу.
                            </p>
                        </div>
                    </div>
            }

            {
                igrolend &&
                <div className="item">
                    <Image src={risovanie} alt={''} width={640} height={480}/>

                    <div className="container">
                        <h4>
                            <span id="dragon">волшебное рисование на стене</span>
                        </h4>

                        <p>
                            С помощью специальных магических карандашей вы можете оживить самых настоящих драконов!
                        </p>
                    </div>
                </div>
            }

            {
                igrolend ? <div className="item">
                        <Image src={pol} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Интерактивный пол</span>
                            </h4>

                            <p>
                                Это зрелищная проекция, реагирующая на любые движения. Человек, попадая в зону
                                активности интерактивного пола, своими действиями оживляет и меняет изображения.
                                Многообразие эффектов интерактивного пола дает возможность использовать его практически
                                без ограничений.
                            </p>
                        </div>
                    </div>
                    : <div className="item">
                        <Image src={game_show} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Развлекательная игра-шоу</span>
                            </h4>

                            <p>
                                Готовьтесь к захватывающему развлекательному шоу, которое оставит вас с горящими глазами и
                                улыбкой на лице! Наши ведущие подарят вам яркие и незабываемые моменты, наполненные
                                весельем и радостью.
                            </p>
                        </div>
                    </div>
            }

            {
                igrolend ? <div className="item">
                        <Image src={neon_disco} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Неоновая дискотека</span>
                            </h4>

                            <p>
                                Наши маленькие гости будут в восторге от яркой и веселой неоновой дискотеки!
                                Здесь они смогут потанцевать под любимые музыкальные хиты и создать незабываемые
                                впечатления в компании своих друзей!
                            </p>
                        </div>
                    </div>
                    : <div className="item">
                        <Image src={disco} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Дискотека с DJ и ведущими</span>
                            </h4>

                            <p>
                                Дополните свой праздник отрывной дискотекой вместе с DJ и ведущим, в формате батлов,
                                флешмобов и различными танцевальными играми, где каждый сможет зажечь не по-детски.
                            </p>
                        </div>
                    </div>
            }

            {
                igrolend ? <div className="item">
                        <Image src={akvagrim} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Аквагрим</span>
                            </h4>

                            <p>
                                Дайте вашим детям возможность стать частью сказочного мира благодаря нашему аквагриму!
                                Наши опытные художники превратят их лица в любимых персонажей из мультфильмов и сказок,
                                создавая незабываемые образы и волшебные воспоминания.
                            </p>
                        </div>
                    </div>
                    : <div className="item">
                        <Image src={silver_show} alt={''} width={640} height={480}/>

                        <div className="container">
                            <h4>
                                <span id="dragon">Серебряное шоу</span>
                            </h4>

                            <p>
                                Дискотеку вы можете дополнить фольгированным шоу, которое сыскало большую любовь среди детей
                                всех возрастов. Возможность выплеснуть всю энергию, бросаясь огромным количеством ленточной
                                фольги, подарите ребенку самые незабываемые впечатления.
                            </p>
                        </div>
                    </div>
            }

            {
                igrolend &&
                <div className="item">
                    <Image src={master_klass} alt={''} width={640} height={480}/>

                    <div className="container">
                        <h4>
                            <span id="dragon">Мастер-класс</span>
                        </h4>

                        <p>
                            Примите участие в увлекательном мастер-классе и раскройте свой талант вместе с нами! Наша
                            профессиональная команда научит вас создавать потрясающие произведения искусства,
                            которые запомнятся на всю жизнь!
                        </p>
                    </div>
                </div>
            }

            {
                igrolend &&
                <div className="item">
                    <Image src={krasiva_loc} alt={''} width={640} height={480} id={'krasiva_loc'}/>

                    <div className="container">
                        <h4>
                            <span id="dragon">Красивая локация и яркие фотки</span>
                        </h4>

                        <p>
                            Давайте запечатлим ваши незабываемые моменты на фоне нашей красивой локации! Все фотографии
                            будут такими яркими и веселыми, как ваше настроение в нашем Игролэнде. Получите море
                            радости и красок в каждом кадре!
                        </p>
                    </div>
                </div>
            }

            {
                igrolend ? <div className="video-section">
                        <h2>Еще остались сомнения?</h2>
                        <h2><span id="dragon">Посмотрите видео и убедитесь</span></h2>

                        <Video width={'70%'} height={'60%'} igrolend={true}/>

                        <h4>
                            Больше материала у нас в социальных сетях
                            <Link href={'https://vk.com/igroland_pavlovo'} target={'_blank'}>
                                <Image src={VK} alt={'ВКонтакте'} width={48} height={48}/>
                            </Link>
                        </h4>
                    </div>
                    : <div className="video-section">
                        <h2>Еще остались сомнения?</h2>
                        <h2><span id="dragon">Посмотрите видео и убедитесь</span></h2>

                        <Video width={'70%'} height={'60%'}/>

                        <h4>
                            Больше материала у нас в социальных сетях
                            <Link href={'https://vk.com/dragon_pavlovo'} target={'_blank'}>
                                <Image src={VK} alt={'ВКонтакте'} width={48} height={48}/>
                            </Link>
                        </h4>
                    </div>
            }
        </section>
    );
}

export default FifthSection;