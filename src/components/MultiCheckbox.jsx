const MultiCheckbox = ({label, options, values, onChange}) => {
     return (
     <>
       <div className='flex-column'>
        <p><strong>{label}</strong></p>
        {options.map((option, index)=>(
            // Creo i checkbox dall'array che arriva
            <label  key={`multi-check${index}`}>                
                <input
                    className='m-right'                    
                    type="checkbox"
                    checked={values.includes(option.value)}
                    onChange={() => onChange(option.value)}
                />
                {option.label}
            </label>
        ))}
       </div>
     </>
     )
}
export default MultiCheckbox;