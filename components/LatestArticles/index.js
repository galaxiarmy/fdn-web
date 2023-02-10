import Image from 'next/image'
import React from 'react'
import styles from './Latest.module.css'

const LatestArticles = ({data}) => {
    console.log({data})
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "80%"}}>
        <div className={styles.header_container}>
            <div>
                <p className={styles.header_title}>Latest Articles</p>
                <p className={styles.header_description}>So you can make better purchase decision</p>
            </div>
            <p style={{color: "#DC143C", cursor: "pointer"}}>See More {'>'}</p>
        </div>

        <div className={styles.grid_container}>
            {
                data && data.length > 0 && data.map((value, i) => {
                    return (
                        <div style={{width: "60%", marginTop: 20}} key={i}>
                            <Image width={300} height={150} src={value.image} alt="ltst" />
                            <p className={styles.title_latest}>{value.title}</p>
                            <div className={styles.container_author}>
                                <p style={{margin: 0}}>{value.author} |</p>
                                <p style={{margin: 0, paddingLeft: 4, color: "grey"}}>{value.published_at}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
        </div>

    </div>
  )
}

export default LatestArticles