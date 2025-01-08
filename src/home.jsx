import Logo from './assets/logo.jpg'
import PhoneLayout from './phone'
import image from './assets/home.webp'
import DownloadAPKButton from './download';
import { motion } from 'framer-motion';
import menu from './assets/menu.png'
import { useState } from 'react';


export default function Home(){


    const imageUrl = image;

    const [isOff,setIsOff] = useState('sidebarOFF')

    const setOffOrOn = ()=>{
        if (isOff === 'sidebarOFF'){
            setIsOff('sidebarOn')
        }
        else{
            setIsOff('sidebarOFF')
        }
    }

    

    return(
        <>

            <div className="main p-7">
                <div className='flex flex-row justify-between items-center' onClick={setOffOrOn} >
                    <div>
                        <img src={Logo} alt="" className='w-14 rounded-full'/>
                    </div>
                    <div className='p-5 gap-5 flex flex-row justify-center items-center' id='navbar'>
                        <a href="https://ko-fi.com/brianalicodes"><img src='https://storage.ko-fi.com/cdn/kofi2.png?v=6%27%20border=%270%27' className='w-30 h-10 cursor-pointer' /></a>
                        <a href="/"><button className='text-white hover:text-cyan-400 kanit text-lg' onClick={setOffOrOn} >Download</button></a>
                        <a href="https://github.com/brianali-codes" target='_blank'><button className='text-white hover:text-cyan-400 kanit text-lg' onClick={setOffOrOn} >Links</button></a>
                        <a href="https://github.com/brianali-codes" target='_blank'><button className='text-white hover:text-cyan-400 kanit text-lg' onClick={setOffOrOn} >Features</button></a>
                        
                    
                    </div>
                    
                    <img src={menu} alt="" className=' hover:cursor-pointer' id='menu' onClick={setOffOrOn}/>

                    <div className={isOff}>

                        <a href="https://ko-fi.com/brianalicodes"><img src='https://storage.ko-fi.com/cdn/kofi2.png?v=6%27%20border=%270%27' className='w-30 h-10 cursor-pointer'/></a>
                        <a href="/"><button className='text-white hover:text-cyan-400 kanit text-lg'>Download</button></a>
                        <a href="https://github.com/brianali-codes" target='_blank'><button className='text-white hover:text-cyan-400 kanit text-lg'>Links</button></a>
                        <a href="https://github.com/brianali-codes" target='_blank'><button className='text-white hover:text-cyan-400 kanit text-lg'>Features</button></a>
                        
                    </div>

                </div>
                <br /><br />
                <div className='flex flex-row justify-around items-center' id='home-sect'>
                    <motion.div
                        id="phone"
                        className="flex flex-col  w-3/6 justify-center items-center p-5 dark:bg-black m-7 rounded-2xl"
                        initial={{ opacity: 0, y: -50 }} // Starting position
                        whileInView={{ opacity: 1, y: 20 }} // Ending position when in view
                        transition={{ duration: 1 }} // Transition duration
                        viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                            <PhoneLayout imageUrl={imageUrl} />
                    </motion.div>
                        
                        
                    <div className='flex flex-col gap-5 items-start w-3/6' id='infos' >
                        <motion.p
                                initial={{ opacity: 0, y: 180 }} // Starting position
                                whileInView={{ opacity: 1, y: 20 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }} // Animation happens only once when it comes into view
                                className='text-white text-3xl kanit'
                        >
                        
                            <span className='text-4xl text-cyan-500' >Frapp </span>Giveaways
                        </motion.p>
                            
                        <motion.p
                                initial={{ opacity: 0, y: 200 }} // Starting position
                                whileInView={{ opacity: 1, y: 10 }} // Ending position when in view
                                transition={{ delay: 0.3, duration: 1 }} // Transition duration
                                viewport={{ once: true }} // Animation happens only once when it comes into view
                                className='text-white kanit text-xl'
                        >
                        AD-FREE | NEW FEATURES | FREEDOM
                        </motion.p>

                        <motion.p
                                initial={{ opacity: 0, y: 190 }} // Starting position
                                whileInView={{ opacity: 1, y: 10 }} // Ending position when in view
                                transition={{ delay: 0.5, duration: 1 }} // Transition duration
                                viewport={{ once: true }} // Animation happens only once when it comes into view className='text-white kanit'>Frapp is a mobile app that provides access to video game giveaways and free games. Users can participate in giveaways, download free games, and report bugs, all with seamless navigation, offering a user-friendly experience for discovering and enjoying free games on mobile devices.</p>
                                className='text-white kanit'
                        >
                            Frapp is a mobile app that provides access to video game giveaways and free games. Users can participate in giveaways, download free games, and report bugs, all with seamless navigation, offering a user-friendly experience for discovering and enjoying free games on mobile devices.
                            </motion.p> 
                        <motion.div
                            initial={{ opacity: 0, y: 200 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ delay: 0.7,duration: 1 }} // Transition duration
                            viewport={{ once: true }} // Animation happens only once when it comes into view
                        >
                            <DownloadAPKButton/>

                        </motion.div>
                        </div>
                </div>

                
                

            </div>

            <hr />
                <br /><br /><br />
                <div className='text-center flex flex-row justify-center items-center'>
                    <p className='kanit text-center text-white'>Frapp Giveaways | All rights reserved | &#169; 2025</p>
                </div>
                <br />
                <br /><br />
        
        </>
    )
}