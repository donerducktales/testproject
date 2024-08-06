import '@/app/components/DarkModeButton/dark-mode-button.css';
import sun from '@/public/img/header/sunny.svg';
import Image from 'next/image';
import { useRef } from 'react';

export default function DarkModeButton() {
   const switchRef = useRef<any>(null);

   const handleClick = () => {
      switchRef.current.classList.toggle('active')
   }
   
   return (
      <div 
         className="dark-mode" 
         onClick={handleClick} 
         ref={switchRef}>
      {/* можливо в майбутньому темний режим реалізується */}
      <div className="round">
         <Image 
            src={sun}
            alt='sun'
            width={14}
            height={14}
         />
      </div>
   </div>
   );
}
