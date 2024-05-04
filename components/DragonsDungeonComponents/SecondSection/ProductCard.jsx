'use client'

import React from 'react';
import Image from "next/image";
import LeadTriggerButton from "@/components/LeadTriggerButton/LeadTriggerButton";

function ProductCard({product}) {
    return (
        <div className="product-card" id={`product-${product.id}`}>
            <div className="container" onClick={() => {
                document.getElementById(`product-${product.id}`).classList.toggle('product-card-active')
                document.getElementById(`background`).classList.toggle('background-active')
            }}>
                <h4>{product.title}</h4>

                <div className="image">
                    <Image src={product.image} alt={product.title} width={1080} height={720}/>
                </div>

                <p>
                    {product.description}
                </p>
            </div>

            <LeadTriggerButton text={'Рассчитать стоимость'}/>
        </div>
    );
}

export default ProductCard;