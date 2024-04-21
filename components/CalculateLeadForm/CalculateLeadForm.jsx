'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";

import lead from '@/public/images/dragons-dungeon/lead-form.jpg'
import axios from "axios";

import Link from "next/link";
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import {format} from "date-fns";

function CalculateLeadForm(props) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [product, setProduct] = useState('')
    const [amountOfPeople, setAmountOfPeople] = useState('6')
    const [age, setAge] = useState('')
    const [date, setDate] = useState(new Date())



    const phoneInput = (e) => {
        const numberLength = 11

        const value = e.target.value.replace(/\D+/g, "");

        let result = ""

        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
                case 0:
                    result += `+7 (`;
                    continue;
                case 4:
                    result += ") ";
                    break;
                case 7:
                    result += "-";
                    break;
                case 9:
                    result += "-";
                    break;
                default:
                    break;
            }

            result += value[i];
        }

        return result
    }

    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                `https://api.telegram.org/bot6644500157:AAFu1FpMWSD_JQ3eshQ2zJnPZxGrtmIBJRM/sendMessage`,
                {
                    chat_id: '899792725',
                    text: `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nМероприятие: ${product}\nКол-во гостей: ${amountOfPeople}\nВозраст: ${age}\nДата: ${format(date, 'dd.MM.yyyy')}`
                }
            );
            // console.log('Message sent:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    console.log(age)

    return (
        <div id={'calculateLeadForm'}>
            <div className="lead-background" onClick={() => {
                document.getElementById('calculateLeadForm').classList.remove('leadForm-active')
            }}></div>
            <form
                  id={'calculateForm'}
            >
                <Image src={lead} alt={'Форма для заявки'} width={320} height={240}/>

                <div className="container">
                    <button type={'button'} onClick={() => {
                        document.getElementById('calculateLeadForm').classList.remove('leadForm-active')
                    }}>
                        <span></span>
                        <span></span>
                    </button>

                    <div id="productSection">
                        <h4>Выберите повод</h4>

                        <select onChange={e => setProduct(e.target.value)}>
                            <option value="Детские дни рождения">Детские дни рождения</option>
                            <option value="Взрослые дни рождения">Взрослые дни рождения</option>
                            <option value="Каникулы">Каникулы</option>
                            <option value="Выпускной">Выпускной</option>
                            <option value="Тимбилдинг">Тимбилдинг</option>
                            <option value="Семейные выходные">Семейные выходные</option>
                            <option value="Моего повода нет в списке">Моего повода нет в списке</option>
                        </select>

                        <Link href={'#amountOfPeopleSection'}>Далее</Link>
                    </div>

                    <div id="amountOfPeopleSection">
                        <h4>Количество гостей</h4>
                        <input type="range" step={1} min={6} max={30} value={amountOfPeople}
                               onChange={e => setAmountOfPeople(e.target.value)}
                        />
                        {amountOfPeople}
                        <Link href={'#ageSection'}>Далее</Link>
                    </div>

                    <div id="ageSection">
                        <h4>Возраст гостей</h4>

                        <select onChange={e => setAge(e.target.value)}
                        >
                            <option value="Дети (от 7 до 14 лет)">Дети (от 7 до 14 лет)</option>
                            <option value="Подростки (от 14 до 18 лет)">Подростки (от 14 до 18 лет)</option>
                            <option value="Взрослые (от 18 лет)">Взрослые (от 18 лет)</option>
                            <option value="Смешанне возрастные категории">Смешанне возрастные категории</option>
                        </select>

                        <Link href={'#dateSection'}>Далее</Link>
                    </div>

                    <div id="dateSection">
                        <h4>Дата мероприятия</h4>

                        <DateRangePicker startDate={date} setStartDate={setDate}/>

                        <Link href={'#callMeSection'}>Далее</Link>
                    </div>

                    <div id="callMeSection">
                        <h5>Оставьте Ваш номер телефона, а мы рассчитаем стоимость мероприятия и перезвоним!</h5>

                        <p>Ваше имя</p>
                        <input type="text" value={name} onChange={e => {
                            setName(e.target.value)
                        }}
                        />

                        <p>Номер телефона</p>
                        <input type="text" value={phone} onChange={e => {
                            setPhone(phoneInput(e))
                        }}
                        />

                        <button type={'submit'}
                                onClick={(e) => sendMessage(e)}
                        >
                            Заказать звонок
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CalculateLeadForm;