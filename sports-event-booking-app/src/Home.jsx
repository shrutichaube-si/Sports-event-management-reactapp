import imageUrl from "./bg.png"
let Home=()=>{
    return <div>
        <h1 style={{color:"black",textAlign:"center",padding:"15px"}}> Sportz Interactive event booking</h1>
        <div style={{backgroundImage:`url(${imageUrl})`,height:"600px",width:"1700px",position:'relative',backgroundRepeat: 'no-repeat'}}></div>
</div>
}

export default Home;