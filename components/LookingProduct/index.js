import { Button, Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ImageFemale from '../../public/images/woman-fdn.jpg'
import styles from '../EditorChoice/Editor.module.css';

const LookingProduct = ({data}) => {
    console.log(JSON.stringify(data));
  return (
    <div className={styles.container_looking_product}>
        <div style={{display: "flex", alignItems: "center"}}>
            <Image src={ImageFemale} alt="fm" width={200} height={200} />
        </div>
        <div style={{width: "20%"}}>
            <p style={{fontWeight: "bold", fontSize: 18}}>Looking for products that are just simply perfect for you?</p>
            <p>Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?</p>
            <Button style={{backgroundColor: "#DC143C", color: "#FFFFFF"}}>
                See My Matches
            </Button>
        </div>
        <div className={styles.body_editor_match}>
        {
            data && data.length > 0 && data.map((value, i) => {
                return (
                    <div key={i} className={styles.box_product_match}>
                        <Image alt='img-f' width={110} height={110} src={value.product.image} />
                        <p style={{margin: 0, color: "#DC143C", fontWeight: "bold"}}>Match Skin Type</p>
                        <div className={styles.box_rating}>
                        <p >{value.product.rating}</p>
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
                )
            })
        }
        </div>
    </div>
  )
}

export default LookingProduct