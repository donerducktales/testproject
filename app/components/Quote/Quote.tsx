export default function Quote({quoteText}: {quoteText: string}) {
   return (
      <div 
         className="quote"
         style={{
            maxWidth: '800px',
            backgroundColor: '#E8E8EA',
            borderRadius: '6px',
            borderLeft: '4px solid #242535',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 10px',
         }}
      >
         <p style={{
            fontStyle: 'italic',
            margin: '32px',
            fontSize: '1.5rem'
         }}>
            {quoteText}
         </p>
      </div>
   );
}