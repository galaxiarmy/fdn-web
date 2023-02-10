import React from 'react'

const Billboard = () => {
  return (
    <div style={{width: "100%", margin: 20 }}>
            <div style={{display: "flex", borderColor: "grey", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex",  borderStyle: "solid", justifyContent: "center", alignItems: "center", width: 970, height: 50, backgroundColor: "#DCDCDC"}}>
                <h3>Top Frame 970x50</h3>
            </div>
            </div>

            <div style={{marginTop: 24, display: "flex", justifyContent: "center", alignItems: "center"}}>

            <div style={{display: 'flex', justifyContent: "center", alignItems: "center", width: 970, height: 250, backgroundColor: "#DCDCDC"}}>
                <h3>Billboard 970x250</h3>
            </div>
            </div>
    </div>
  )
}

export default Billboard