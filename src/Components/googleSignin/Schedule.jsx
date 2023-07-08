
const Schedule = () => {
  return (
    <div> 
        <div style={{display: 'flex', flexDirection: 'column' , backgroundColor: 'white' , paddingTop: '20px'}}>
        <h1>Today's Schedule</h1>
     
        <div style={{display: 'flex'}}>
        <div style={{width: '10px', height: '70px', backgroundColor: '#90be6d' }}></div>
        <div><h2 style={{paddingLeft: '15px'}}>Meeting with suppliers from kuta Bali</h2> <h3 style={{opacity: '0.7', color: 'gray',paddingLeft: '15px'}}>14.00-15.00</h3> <h3 style={{opacity: '0.7', color: 'gray',paddingLeft: '15px'}}>at Sunset Road, kuta, Bali</h3></div>
        </div>
        <br/>
        <div style={{display: 'flex'}}>
        <div style={{width: '10px', height: '70px', backgroundColor: '#f25c54'}}></div>
        <div><h2 style={{paddingLeft: '15px'}}>Meeting with suppliers from kuta Bali</h2> <h3 style={{opacity: '0.7', color: 'gray',paddingLeft: '15px'}}>14.00-15.00</h3> <h3 style={{opacity: '0.7', color: 'gray',paddingLeft: '15px'}}>at Sunset Road, kuta, Bali</h3></div>
        </div>
        </div>
    </div>
  )
}

export default Schedule