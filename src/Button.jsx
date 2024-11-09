


function Button(){

    // const handleClick =()=>{console.log('Button clicked!')}
    // const handleClick2 =(name)=>{console.log(`${name}, stop clicking me!`)}
    let count = 0;
    function handleClick2(name){
        if(count < 3){
            count++;
            console.log(`${name}, you clicked me ${count}`)
        }else{
            console.log(`${name}, stop clicking me.`)
        }
    }



    return(
        <>
        {/* <button onClick={handleClick}> click me</button> */}
        <button onClick={()=>handleClick2('Sammy')}>
            Click Me 😀😁😉
        </button>
        </>
    )
}
export default Button