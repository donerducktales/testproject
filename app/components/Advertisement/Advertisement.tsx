import '../Advertisement/advertisement.css';

export default function Advertisement({background}: {background: string}) {
   return (
      <div 
         className="advertisement"
         style={{
            backgroundColor: background
         }}
      >
         <p style={{
            fontSize: '0.875rem',
            fontWeight: '400',
            color: '#696A75',
         }}>
            Advertisement
         </p>
         <p style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#696A75',
         }}>
            You can place ads
         </p>
         <p style={{
            fontSize: '1.125rem',
            fontWeight: '400',
            color: '#696A75',
         }}>
            750x100
         </p>
      </div>
   );
}