import React from 'react';
import Component1 from './Component1';
import Footer1 from './Footer1';
import ProductDetails from './ProductDetails';

export default function MainComponent() {
    return (
        <div className='flex  justify-center items-center'>
            <div className='flex w-[1600px] h-[900px] mt-8 '>
                <div className='flex w-full space-x-5  border border-black flex-wrap'>
                    <Component1 photo="https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" title="coffee-mug" category="mug" />
                    <Component1 photo='https://images.unsplash.com/photo-1589879171634-dc628cc021f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGN1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' title="gift-mug" category="mug" />
                    <Component1 photo='https://images.unsplash.com/photo-1528283207300-df0edb7961fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGN1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' title="batthing-mug" category="mug" />

                    <Component1 photo='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' title="rounded neck t-shirt-mug" category="t-shirt" />


                    <Component1 photo="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" title="best phone in market" category="mobile" />
                    <Component1 photo="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" title="best phone in market" category="mobile" />
                    <Component1 photo="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" title="best phone in market" category="mobile" />

                   <div className=''><Footer1/></div>
                   <ProductDetails/>



                </div>


            </div>
        </div>

    )
}
