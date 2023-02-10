import { Person2Rounded } from '@mui/icons-material';
import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import styles from '../LatestReviews/Review.module.css'

const LatestReviews = ({data}) => {
    console.log('data reviews', data);
  return (
    <div style={{display: "flex", justifyContent: "center", marginBottom: 150}}>
    <div style={{width: "80%"}}>
      <div className={styles.header_container}>
            <div>
                <p className={styles.header_title}>Latest Reviews</p>
                <p className={styles.header_description}>So you can make better purchase decision</p>
            </div>
            <p style={{color: "#DC143C", cursor: "pointer"}}>See More {'>'}</p>
        </div>

        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        {data && data.length > 0 && data.map((value, i) => {
            return (
                <div style={{width: "23%"}}>
                    <div className={styles.box_product}>
                    <div style={{display: "flex", }}>
                        <Image width={80} height={80} alt="img" src={value.product.image} />
                        <div>
                            <p style={{fontWeight: "bold", fontSize: 16}}>{value.product.name}</p>
                            <p>{value.product.desc}</p>
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                        <Rating size="small" disabled={true} value={value.star} />
                        </div>
                        <p style={{fontSize: 12, color: "grey"}}>2 Hours</p>
                    </div>
                    <div>
                        <p style={{margin: 0}}>{value.comment} Read More</p>
                    </div>
                    </div>
                    <div style={{position: "absolute", marginLeft: 70 }}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div>
                        <div style={{textAlign: "center"}}>
                        <Person2Rounded />
                        </div>
                        <p style={{textAlign: "center", margin: 0, fontSize: 16, fontWeight: "bold"}}>{value.user}</p>
                        <p style={{margin: 0, fontSize: 14, color: "grey"}}>{value.profile[1]}, {value.profile[3]}</p>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })}
        <div style={{display: "flex", justifyContent: "center", borderRadius: 10, width: 300, height: 250, backgroundColor: "#DCDCDC", borderStyle: "solid", borderColor: "grey"}}>
            <div>
            <p>MR 2</p>
            <p>300x250</p>
            </div>
        </div>
     </div>

     </div>

    
    </div>
  )
}

export default LatestReviews