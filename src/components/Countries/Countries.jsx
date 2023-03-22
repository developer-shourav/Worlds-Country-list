export const  Countries = (props) => {
    const {name, capital, flags, region} = props.country;

    return (
        <div className='user-div'>
         <img style={{marginTop:"20px", borderRadius:"10px"}} src={flags.png} alt="" />
        <h2>{name.common}</h2>
        <h4>Capital: {capital}</h4>
        <p><b>Region: {region}</b></p>
   </div>  
    )
}

