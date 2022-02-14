/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import dynamic from "next/dynamic"
import styled from 'styled-components'
import { StyledButton } from "/components/Buttons/Button.styles"
import LogoAlt from '../components/icons/svg/logoAlt';


const BGImgTeam = dynamic(() => import("../components/BGImgTeam"), {
  ssr: false,
  loading: () => <p>...data</p>
});


const team = () => {

 
  return (
  <>
      
      


      <Wrapper className="  absolute z-10 flex flex-col items-center justify-end">
      <section className="mx-auto w-11/12 md:w-12/12 py-12 px-1 text-center md:py-4 md:px-4">
             <div className=" flex-col items-center justify-center">

             <div >
                    <p className="headingA text-center text-[3rem] xl:text-[9rem] text-yellow-500">Das Team</p>
            </div>

            <div className="">
            <div className='mx-auto w-8/12 lg:4/12 xl:4/12'>
              <Image src="/LogoAlt.png" alt="logoalt" height="240" width="1090" layout="responsive"/>
            </div>

               
             </div>
             
        
            <div className='w-20' >  
                <Image src="/matroseimseil.png" alt="logoalt" height="445" width="159" layout="responsive"/>
            </div>
            
          </div>
      <div className="-mt-24 flex flex-wrap -mx-24 lg:-mt-96">
              <div className="p-24 w-96 md:w-1/3 xl:p-36">
                <Image className="w-1/3 mx-auto mb-4 rounded-full" src="/matrose.png" layout="responsive" width="100" height="120" alt="Portrait"/>
                <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Simon</h3>
                <span className="text-2xl Logo text-blue-800 font-bold ">Obermaat</span>
                <p className="mt-4  text-1xl text-gray-300 leading-relaxed xl:text-2xl">Simon ist Teammitglied der ersten Stunde. Im richtigen Leben ist der studierte Erziehungswissenschaftler in einem Jugendprojekt tätig. Simon ist ausgewiesener SC Freiburg Fan und wann immer möglich begleited er das Team zu den Auswärtsspielen</p>
              </div> 
             <lr classname="w-9/12 text-red-400"/> 
              <div className="p-24 md:w-1/3 xl:p-36 ">
              <Image className="w-1/3 mx-auto mb-4 rounded-full" src="/portrait-mick1.png" layout="responsive" width="100" height="120" alt="Portrait"/>
              <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Mick</h3>
                <span className="text-2xl text-blue-800 font-bold ">Captain</span>
                <p className="mt-4 text-1xl text-gray-300 leading-relaxed xl:text-2xl">Volker Schneider und Michael Schreck haben 2017 die Idee und das Konzept des Rettungsankers initiiert und liessen den Kahn in September 2017 vom Stapel laufen. Seit Januar 2020 zeigt sich Michael nun in alleiniger Verantwortung für den Rettungsanker und steurt das Schiff in diesen unruhigen Zeiten verantwortungsvoll durch die hohen Wogen </p>
              </div>
              <div className=" p-24 md:w-1/3 xl:p-36">
              <Image className="-nt-w-1/3 mx-auto mb-4 rounded-full" src="/offizierin.png" layout="responsive" width="100" height="120" alt="Portrait"/>
              <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Anne</h3>
                <span className="text-2xl text-blue-800 font-bold ">I. Offizierin</span>
                <p className="mt-4 text-1xl xl:text-1xl text-gray-300 leading-relaxed xl:text-2xl ">Auch Anne ist Teammitglied der ersten Stunde nach Stapellauf des Rettungsankers-Mit Ihrer langjährigen Gastroerfahrung  ist sie ein wichtiger Pfeiler im Team des Rettungsankers</p>
              </div>
            </div>
</section>         

</Wrapper>
<BGImgTeam className=""></BGImgTeam>
    
</section>        
)
</>

  )}



export default team
