'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";

import lead from '@/public/images/dragons-dungeon/lead-form.jpg'
import axios from "axios";

// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';
import Link from "next/link";
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import {format} from "date-fns";
import {useRouter} from "next/navigation";

function CalculateLeadForm(props) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [product, setProduct] = useState('')
    const [amountOfPeople, setAmountOfPeople] = useState('')
    const [age, setAge] = useState('')
    const [date, setDate] = useState('')
    const [options, setOptions] = useState('')

    const router = useRouter()

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

    console.log(options.replace('undefined, ', ''))

    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                `https://api.telegram.org/bot6644500157:AAFu1FpMWSD_JQ3eshQ2zJnPZxGrtmIBJRM/sendMessage`,
                {
                    chat_id: '899792725',
                    text: `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nМероприятие: ${product}\nКол-во гостей: ${amountOfPeople}\nВозраст: ${age}\nДата: ${date}\nНаполнение: ${options.replace('undefined, ', '')}`
                }
            );
            document.getElementById('thankYouSection').scrollIntoView()
            // console.log('Message sent:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

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

                        <div className={'radio-item'}
                             onClick={() => setProduct('Детские дни рождения')}
                        >
                            <input type="radio" id="kids" name="product" value="Детские дни рождения"/>
                            <label htmlFor="kids">Детские дни рождения</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct('Взрослые дни рождения')}
                        >
                            <input type="radio" id="adults" name="product" value="Взрослые дни рождения"/>
                            <label htmlFor="adults">Взрослые дни рождения</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct('Каникулы')}
                        >
                            <input type="radio" id="holidays" name="product" value="Каникулы"/>
                            <label htmlFor="holidays">Каникулы</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct('Выпускной')}
                        >
                            <input type="radio" id="graduation" name="product" value="Выпускной"/>
                            <label htmlFor="graduation">Выпускной</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct('Тимбилдинг')}
                        >
                            <input type="radio" id="team" name="product" value="Тимбилдинг"/>
                            <label htmlFor="team">Тимбилдинг</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct('Семейные выходные')}
                        >
                            <input type="radio" id="weekend" name="product" value="Семейные выходные"/>
                            <label htmlFor="weekend">Семейные выходные</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct('Другое')}
                        >
                            <input type="radio" id="other" name="product" value="Другое"/>
                            <label htmlFor="other">Другое</label>
                        </div>

                        <Link href={!product ? '#productSection' : '#amountOfPeopleSection'}>Далее</Link>
                    </div>

                    <div id="amountOfPeopleSection">
                        <h4>Количество гостей</h4>

                        <div className={'radio-item'}
                             onClick={() => setAmountOfPeople('До 10 человек')}
                        >
                            <input type="radio" id="ten" name="amountOfPeople" value="До 10 человек"/>
                            <label htmlFor="ten">До 10 человек</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setAmountOfPeople('От 11 до 20 человек')}
                        >
                            <input type="radio" id="moreTen" name="amountOfPeople" value="От 11 до 20 человек"/>
                            <label htmlFor="moreTen">От 11 до 20 человек</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setAmountOfPeople('Больше 20 человек')}
                        >
                            <input type="radio" id="maximum" name="amountOfPeople" value="Больше 20 человек"/>
                            <label htmlFor="maximum">Больше 20 человек</label>
                        </div>
                        <Link href={!amountOfPeople ? '#amountOfPeopleSection' : '#ageSection'}>Далее</Link>
                    </div>

                    <div id="ageSection">
                        <h4>Возраст гостей</h4>

                        <div className={'radio-item'}
                             onClick={() => setAge('Дети (от 7 до 10 лет)')}
                        >
                            <input type="radio" id="kid" name="amountOfPeople" value="Дети (от 7 до 10 лет)"/>
                            <label htmlFor="kid">Дети (от 7 до 10 лет)</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setAge('Подростки (от 11 до 18 лет)')}
                        >
                            <input type="radio" id="teen" name="age" value="Подростки (от 11 до 18 лет)"/>
                            <label htmlFor="teen">Подростки (от 11 до 18 лет)</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setAge('Взрослые (от 18 лет)')}
                        >
                            <input type="radio" id="adult" name="age" value="Взрослые (от 18 лет)"/>
                            <label htmlFor="adult">Взрослые (от 18 лет)</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setAge('Смешанный')}
                        >
                            <input type="radio" id="mix" name="age" value="Смешанный"/>
                            <label htmlFor="mix">Смешанный</label>
                        </div>

                        <Link href={!age ? '#ageSection' : '#dateSection'}>Далее</Link>
                    </div>

                    <div id="dateSection">
                        <h4>Когда планируете мероприятие?</h4>

                        <div className={'radio-item'}
                             onClick={() => setDate('На этой неделе')}
                        >
                            <input type="radio" id="thisWeek" name="date" value="На этой неделе"/>
                            <label htmlFor="thisWeek">На этой неделе</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setDate('В этом месяце')}
                        >
                            <input type="radio" id="thisMonth" name="date" value="В этом месяце"/>
                            <label htmlFor="thisMonth">В этом месяце</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setDate('Планируем заранее, еще больше месяца впереди')}
                        >
                            <input type="radio" id="far" name="date"
                                   value="Планируем заранее, еще больше месяца впереди"/>
                            <label htmlFor="far">Планируем заранее, еще больше месяца впереди</label>
                        </div>

                        <Link href={!date ? '#dateSection' : '#optionSection'}>Далее</Link>
                    </div>

                    <div id="optionSection">
                        <h4>чем хотите дополнить праздник?</h4>

                        <h5>(выберите один или несколько)</h5>

                        <div className={'radio-item'}
                             onClick={(e) => setOptions(prevState => {
                                 if (!options.includes(e.target.value)) {
                                     return prevState + `${e.target.value}, `
                                 } else {
                                     return options.replace(`${e.target.value}, `, '')
                                 }
                             })}
                        >
                            <input type="checkbox" id="disco" name="options" value="Дискотека"/>
                            <label htmlFor="disco">Дискотека</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={(e) => setOptions(prevState => {
                                 if (!options.includes(e.target.value)) {
                                     return prevState + `${e.target.value}, `
                                 } else {
                                     return options.replace(`${e.target.value}, `, '')
                                 }
                             })}
                        >
                            <input type="checkbox" id="silver" name="options" value="Серебряное шоу"/>
                            <label htmlFor="silver">Серебряное шоу</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={(e) => setOptions(prevState => {
                                 if (!options.includes(e.target.value)) {
                                     return prevState + `${e.target.value}, `
                                 } else {
                                     return options.replace(`${e.target.value}, `, '')
                                 }
                             })}
                        >
                            <input type="checkbox" id="food" name="options" value="Банкетная зона"/>
                            <label htmlFor="food">Банкетная зона</label>
                        </div>

                        <Link href={'#callMeSection'}>Далее</Link>
                    </div>

                    <div id="callMeSection">
                        <span>Оставьте Ваш номер телефона, а мы рассчитаем стоимость мероприятия и перезвоним!</span>

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

                        <Link href={!name || !phone ? '#callMeSection' : '#thankYouSection'}
                                onClick={(e) => {
                                    if (name && phone) sendMessage(e)
                                }}
                        >
                            Заказать звонок
                        </Link>
                    </div>

                    <div id="thankYouSection">
                        <h4>Готово!</h4><br/>

                        <h4>Спасибо за уделенное время!</h4>

                        <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('calculateLeadForm').classList.remove('leadForm-active')
                                    router.push('/dragons-dungeon')
                                }}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CalculateLeadForm;