const Events = () => {
    let submitFn = (data)=>{
        console.log(`Hello ${data}`);
    }
    return ( 
        <div className="events">
            <button onClick={()=>submitFn("React")} >Click</button>
        </div>
     );
}
 
export default Events; 