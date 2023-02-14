import React from 'react'


export default function Button({onClick, text}){
    return (
        <div>
            <button 
                type="button" 
                className=" bg-[#275342] hover:bg-[#14532d]  roundedmt-6 flex w-full items-center justify-center rounded-lg border border-transparent py-3 px-8 text-base leading-4 font-['Roboto']  font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick = {onClick}>{text}</button>
        </div>
        
    )
}