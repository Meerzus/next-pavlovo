'use client'

import React, {useEffect, useState} from 'react';
import LeadForm from "@/components/LeadForm/LeadForm";

import './LeadTriggerButton.sass'
import Image from "next/image";

import phone from '@/public/images/dragons-dungeon/svg/Phone.svg'
import Link from "next/link";

function LeadTriggerButton({text}) {

    const [windowSize, setWindowSize] = useState(false)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
        if (window.innerWidth > 1200) {
            setWindowSize(true)
        }
    }, []);

    return text === 'подарите себе незабываемый праздник' || text === 'Рассчитать стоимость' || text === 'Оставить заявку' ? (
        <button onClick={() => {
            document.getElementById('calculateLeadForm').classList.add('leadForm-active')
        }}>
            {text}
        </button>
    ) : (
        <button onClick={() => {
            if (width > 1200) {
                document.getElementById('leadForm').classList.add('leadForm-active')
            }
        }} id={'call-btn'}>
            {windowSize && text}
            {
                !windowSize &&
                <Link href={'tel:+79101448287'}><Image alt={'Позвонить'} src={phone} width={48} height={48}/></Link>
            }
        </button>
    );
}

export default LeadTriggerButton;