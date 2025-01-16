import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <section className='h-[40dvh]'>

            </section>
            <section className='h-[100dvh]'>

                <div className="relative max-w-[250px]">
                    <Image
                        src={"/blog1.png"}
                        className="rounded-3xl w-[250px] h-auto"
                        alt="image"
                        width={400}
                        height={400}
                    />
                    <div
                        style={{ boxShadow: "0.10rem 0.50rem white" }}
                        className=" absolute bottom-20 right-0 rounded-br-[1rem]  bg-transparent border-white h-6 w-4 "
                    ></div>
                    <div
                        className=" absolute bottom-0 right-20 rounded-br-[1rem] bg-transparent h-4 w-6 "
                        style={{ boxShadow: "0.50rem 0.10rem white" }}
                    ></div>

                    <div className="absolute p-2 h-20 w-20 rounded-tl-[2.5rem] bg-white bottom-0 right-0">
                        <div className="  h-16 w-16 rounded-full bg-red-400 text-6xl text-white text-center">
                            +
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default page