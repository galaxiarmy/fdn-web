import React from 'react'

const InternalCampaignDummy = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", padding: 30,}}>
        <div style={{borderStyle: "solid", borderColor: "grey", width: 970, backgroundColor: "#D3D3D3", height: 250,  display: "flex", justifyContent: "center", alignItems:"center"}}>
           <div>
            <p style={{textAlign:"center", fontSize: 24, color: "grey" }}>Horizontal 970x250</p>
            <p style={{textAlign:"center", fontSize: 24, color: "grey" }}>(Internal campaign only)</p>
            </div>
        </div>
    </div>
  )
}

export default InternalCampaignDummy