'use client'
import React from 'react';

function ProductBackground(props) {
    return (
        <div id="background" onClick={() => {
            document.getElementById(`product-1`)?.classList.remove('product-card-active')
            document.getElementById(`product-2`)?.classList.remove('product-card-active')
            document.getElementById(`product-3`)?.classList.remove('product-card-active')
            document.getElementById(`product-4`)?.classList.remove('product-card-active')
            document.getElementById(`product-5`)?.classList.remove('product-card-active')
            document.getElementById(`product-6`)?.classList.remove('product-card-active')
            document.getElementById(`background`)?.classList.remove('background-active')
        }}></div>
    );
}

export default ProductBackground;