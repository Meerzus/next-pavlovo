'use client'

import React, {useState} from 'react';
import Image from "next/image";

import lead from '@/public/images/dragons-dungeon/lead-form.jpg'
import axios from "axios";

function LeadForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

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
        // e.preventDefault()
        try {
            const response = await axios.post(
                `https://api.telegram.org/bot6644500157:AAFu1FpMWSD_JQ3eshQ2zJnPZxGrtmIBJRM/sendMessage`,
                {
                    chat_id: '899792725',
                    text: `Новая заявка! Имя: ${name}, телефон: ${phone}`
                }
            );
            // console.log('Message sent:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div id={'leadForm'}>
            <div className="lead-background" onClick={() => {
                document.getElementById('leadForm').classList.remove('leadForm-active')
            }}></div>
            <form onSubmit={(e) => sendMessage(e)}>
                <Image src={lead} alt={'Форма для заявки'} width={320} height={240}/>

                <div className="container">
                    <button type={'button'} onClick={() => {
                        document.getElementById('leadForm').classList.remove('leadForm-active')
                    }}>
                        <span></span>
                        <span></span>
                    </button>

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

                    <button type={'submit'}>
                        Заказать звонок
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LeadForm;