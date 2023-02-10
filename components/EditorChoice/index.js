import { AccountCircle, Person2Outlined } from '@mui/icons-material';
import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import styles from './Editor.module.css'

const EditorChoice = ({data}) => {
    console.log('kok gamasuk yaa', data);
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <div style={{width: "88%",}}>
        <p className={styles.title_container_editor}>Editor's Choice</p>
        <p className={styles.title_container_description}>Currated With Love</p>
        <div className={styles.body_editor}>
        {
            data && data.length > 0 && data.map((value, i) => {
                return (
                    <div key={i}>
                    <div className={styles.header_editor}>
                        <div style={{display: "flex", alignItems: "center", paddingRight: 6}}>
                        <AccountCircle fontSize="large" style={{color: "#000000",}} />
                        </div>
                        <div>
                            <p className={styles.title_editor}>{value.editor}</p>
                            <p className={styles.title_role}>{value.role}</p>
                        </div>
                    </div>
                    <div className={styles.box_product}>
                        <Image alt='img-f' width={120} height={170} src={value.product.image} />
                        
                        <div className={styles.box_rating}>
                        <p>{value.product.rating}</p>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <Rating
                                size="small"
                                color='variant'
                                disabled={true}
                                name="simple-controlled"
                                value={value.product.rating}  
                                />
                            </div>
                            <p>(7)</p>
                            </div>
                            <p className={styles.title_product_name}>{value.product.name}</p>
                            <p className={styles.title_product_description}>{value.product.description}</p>
                            <p style={{margin: 0, paddingTop: 6, color: "grey"}}>Rosy Beige</p>

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

export default EditorChoice