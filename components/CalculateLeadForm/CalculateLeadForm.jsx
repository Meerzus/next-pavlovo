'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";

import lead from '@/public/images/dragons-dungeon/lead-form.jpg'
import igrolendLead from '@/public/images/igrolend/lead.jpg'
import axios from "axios";

// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';
import Link from "next/link";
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import {format} from "date-fns";
import {useRouter} from "next/navigation";

function CalculateLeadForm({igrolend}) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [product, setProduct] = useState('')
    const [amountOfPeople, setAmountOfPeople] = useState('')
    const [age, setAge] = useState('')
    const [date, setDate] = useState('')
    const [options, setOptions] = useState('')

    const [isPolicy, setIsPolicy] = useState(false)

    const [firstStep, setFirstStep] = useState(true)
    const [secondStep, setSecondStep] = useState(false)
    const [thirdStep, setThirdStep] = useState(false)
    const [fourthStep, setFourthStep] = useState(false)
    const [fifthStep, setFifthStep] = useState(false)
    const [sixthStep, setSixthStep] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

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

    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                `https://api.telegram.org/bot6644500157:AAFu1FpMWSD_JQ3eshQ2zJnPZxGrtmIBJRM/sendMessage`,
                {
                    chat_id: '803550408',
                    text: `Новая заявка ${igrolend ? 'Игролэнд' : 'Подземелье Дракона'}!\nИмя: ${name}\nТелефон: ${phone}\nМероприятие: ${product}\nКол-во гостей: ${amountOfPeople}\nВозраст: ${age}\nДата: ${date}\n${igrolend ? `Продолжение программы: ${options.replace('undefined, ', '')}` : `Наполнение: ${options.replace('undefined, ', '')}`}`
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
                {
                    igrolend ? <Image src={igrolendLead} alt={'Форма для заявки'} width={1080} height={720}/>
                        : <Image src={lead} alt={'Форма для заявки'} width={1080} height={720}/>
                }


                <div className="container">
                    <button type={'button'} onClick={() => {
                        document.getElementById('calculateLeadForm').classList.remove('leadForm-active')
                    }}>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="steps" style={{
                        opacity: isComplete ? '0' : '1'
                    }}>
                        <span style={{
                            opacity: firstStep ? '1' : '0.33'
                        }}>1</span>
                        <span style={{
                            opacity: secondStep ? '1' : '0.33'
                        }}>2</span>
                        <span style={{
                            opacity: thirdStep ? '1' : '0.33'
                        }}>3</span>
                        <span style={{
                            opacity: fourthStep ? '1' : '0.33'
                        }}>4</span>
                        <span style={{
                            opacity: fifthStep ? '1' : '0.33'
                        }}>5</span>
                        <span style={{
                            opacity: sixthStep ? '1' : '0.33'
                        }}>6</span>
                    </div>

                    <div id="productSection">
                        <h4>Выберите повод</h4>

                        <div className={'radio-item'}
                             onClick={() => setProduct(igrolend ? 'Каникулы' : 'Детские дни рождения')}
                        >
                            <input type="radio" id="kids" name="product" value={
                                igrolend ? 'Каникулы' : "Детские дни рождения"}/>
                            <label htmlFor="kids">{
                                igrolend ? 'Каникулы' : 'Детские дни рождения'}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct(igrolend ? 'День рождения' : 'Взрослые дни рождения')}
                        >
                            <input type="radio" id="adults" name="product" value={
                                igrolend ? 'День рождения' : "Взрослые дни рождения"}/>
                            <label htmlFor="adults">{
                                igrolend ? 'День рождения' : 'Взрослые дни рождения'}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct(igrolend ? 'Выпускной' : 'Каникулы')}
                        >
                            <input type="radio" id="holidays" name="product" value={
                                igrolend ? 'Выпускной' : "Каникулы"}/>
                            <label htmlFor="holidays">{
                                igrolend ? 'Выпускной' : 'Каникулы'}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct(igrolend ? 'Свободная игра' : 'Выпускной')}
                        >
                            <input type="radio" id="graduation" name="product" value={
                                igrolend ? 'Свободная игра' : "Выпускной"}/>
                            <label htmlFor="graduation">{
                                igrolend ? 'Свободная игра' : 'Выпускной'}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct(igrolend ? 'Тематическая вечеринка' : 'Тимбилдинг')}
                        >
                            <input type="radio" id="team" name="product" value={
                                igrolend ? 'Тематическая вечеринка' : "Тимбилдинг"}/>
                            <label htmlFor="team">{
                                igrolend ? 'Тематическая вечеринка' : 'Тимбилдинг'}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct(igrolend ? 'VIP' : 'Семейные выходные')}
                        >
                            <input type="radio" id="weekend" name="product" value={
                                igrolend ? 'VIP' : "Семейные выходные"}/>
                            <label htmlFor="weekend">{
                                igrolend ? 'VIP' : 'Семейные выходные'}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setProduct('Другое')}
                        >
                            <input type="radio" id="other" name="product" value="Другое"/>
                            <label htmlFor="other">Другое</label>
                        </div>

                        <Link href={!product ? '#productSection' : '#amountOfPeopleSection'}
                              onClick={() => {
                                  if (product) {
                                      setFirstStep(false)
                                      setSecondStep(true)
                                      setThirdStep(false)
                                      setFourthStep(false)
                                      setFifthStep(false)
                                      setSixthStep(false)
                                  }
                              }}
                        >Далее</Link>
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
                        <Link href={!amountOfPeople ? '#amountOfPeopleSection' : '#ageSection'}
                              onClick={() => {
                                  if (amountOfPeople) {
                                      setFirstStep(false)
                                      setSecondStep(false)
                                      setThirdStep(true)
                                      setFourthStep(false)
                                      setFifthStep(false)
                                      setSixthStep(false)
                                  }
                              }}
                        >Далее</Link>
                    </div>

                    <div id="ageSection">
                        <h4>Возраст гостей</h4>

                        <div className={'radio-item'}
                             onClick={() => setAge(igrolend ? '3-5 лет' : "Дети (от 7 до 10 лет)")}
                        >
                            <input type="radio" id="kid" name="amountOfPeople" value={igrolend ? '3-5 лет' : "Дети (от 7 до 10 лет)"}/>
                            <label htmlFor="kid">{igrolend ? '3-5 лет' : 'Дети (от 7 до 10 лет)'}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setAge(igrolend ? '6-8 лет' : "Подростки (от 11 до 18 лет)")}
                        >
                            <input type="radio" id="teen" name="age" value={igrolend ? '6-8 лет' : "Подростки (от 11 до 18 лет)"}/>
                            <label htmlFor="teen">{igrolend ? '6-8 лет' : "Подростки (от 11 до 18 лет)"}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setAge(igrolend ? '9-13 лет' : "Взрослые (от 18 лет)")}
                        >
                            <input type="radio" id="adult" name="age" value={igrolend ? '9-13 лет' : "Взрослые (от 18 лет)"}/>
                            <label htmlFor="adult">{igrolend ? '9-13 лет' : "Взрослые (от 18 лет)"}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={() => setAge(igrolend ? 'Старше 13 лет' : "Смешанный")}
                        >
                            <input type="radio" id="mix" name="age" value={igrolend ? 'Старше 13 лет' : "Смешанный"}/>
                            <label htmlFor="mix">{igrolend ? 'Старше 13 лет' : "Смешанный"}</label>
                        </div>

                        <Link href={!age ? '#ageSection' : '#dateSection'}
                              onClick={() => {
                                  if (age) {
                                      setFirstStep(false)
                                      setSecondStep(false)
                                      setThirdStep(false)
                                      setFourthStep(true)
                                      setFifthStep(false)
                                      setSixthStep(false)
                                  }
                              }}
                        >Далее</Link>
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

                        <Link href={!date ? '#dateSection' : '#optionSection'}
                              onClick={() => {
                                  if (date) {
                                      setFirstStep(false)
                                      setSecondStep(false)
                                      setThirdStep(false)
                                      setFourthStep(false)
                                      setFifthStep(true)
                                      setSixthStep(false)
                                  }
                              }}
                        >Далее</Link>
                    </div>

                    <div id="optionSection">
                        <h4>{igrolend ? 'Продолжение программы' : "чем хотите дополнить праздник?"}</h4>

                        {!igrolend && <h5>(выберите один или несколько)</h5>}

                        <div className={'radio-item'}
                             onClick={(e) => setOptions(
                                 igrolend ? '1,5 часа' : prevState => {
                                     if (!options.includes(e.target.value)) {
                                         return prevState + `${e.target.value}, `
                                     } else {
                                         return options.replace(`${e.target.value}, `, '')
                                     }
                                 })}
                        >
                            <input type={igrolend ? 'radio' : "checkbox"} id="disco" name="options" value={igrolend ? '1,5 часа' : "Дискотека"}/>
                            <label htmlFor="disco">{igrolend ? '1,5 часа' : "Дискотека"}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={(e) => setOptions(
                                 igrolend ? '2 часа' : prevState => {
                                     if (!options.includes(e.target.value)) {
                                         return prevState + `${e.target.value}, `
                                     } else {
                                         return options.replace(`${e.target.value}, `, '')
                                     }
                                 }
                                 )}
                        >
                            <input type={igrolend ? 'radio' : "checkbox"} id="silver" name="options" value={igrolend ? '2 часа' : "Серебряное шоу"}/>
                            <label htmlFor="silver">{igrolend ? '2 часа' : "Серебряное шоу"}</label>
                        </div>

                        <div className={'radio-item'}
                             onClick={(e) => setOptions(
                                 igrolend ? '2,5 часа' : prevState => {
                                     if (!options.includes(e.target.value)) {
                                         return prevState + `${e.target.value}, `
                                     } else {
                                         return options.replace(`${e.target.value}, `, '')
                                     }
                                 }
                                 )}
                        >
                            <input type={igrolend ? 'radio' : "checkbox"} id="food" name="options" value={igrolend ? '2,5 часа' : "Банкетная зона"}/>
                            <label htmlFor="food">{igrolend ? '2,5 часа' : "Банкетная зона"}</label>
                        </div>

                        {
                            igrolend &&
                            <div className={'radio-item'}
                                 onClick={(e) => setOptions('3 часа')}
                            >
                                <input type='radio' id="hours" name="options"
                                       value='3 часа'/>
                                <label htmlFor="hours">3 часа</label>
                            </div>
                        }

                        <Link href={'#callMeSection'}
                              onClick={() => {
                                  if (date) {
                                      setFirstStep(false)
                                      setSecondStep(false)
                                      setThirdStep(false)
                                      setFourthStep(false)
                                      setFifthStep(false)
                                      setSixthStep(true)
                                  }
                              }}
                        >Далее</Link>
                    </div>

                    <div id="callMeSection">
                        <h5>
                            Оставьте Ваш номер телефона и мы рассчитаем стоимость мероприятия, а также
                            забронируем подарок
                        </h5>

                        <h6>
                            Во время расчета стоимости у менеджера могут появиться дополнительные вопросы. В этом случае
                            он свяжется с Вами по телефону.
                        </h6>

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

                        <p>
                            <input type="checkbox" onClick={() => setIsPolicy(prevState => !prevState)}/>
                            Я соглашаюсь на обработку персональных данных согласно <Link href={'/'}>
                            политике конфиденциальности</Link>
                        </p>

                        <Link href={!name || !phone || !isPolicy? '#callMeSection' : '#thankYouSection'}
                                onClick={(e) => {
                                    if (name && phone　&& isPolicy) {
                                        sendMessage(e)
                                        setIsComplete(true)
                                    }
                                }}
                        >
                            Получить расчет + забронировать подарок
                        </Link>
                    </div>

                    <div id="thankYouSection">
                        <h4>Готово!</h4><br/>

                        <h4>Спасибо за уделенное время!</h4>

                        <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('calculateLeadForm').classList.remove('leadForm-active')
                                    if (igrolend) {
                                        router.push('/igrolend')
                                    } else {
                                        router.push('/podzemelye-drakona')
                                    }
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