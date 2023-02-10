import { Box, Skeleton } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import EditorChoice from '../components/EditorChoice';
import LookingProduct from '../components/LookingProduct';
import Navbar from '../components/Navbar';
import { getDataEditor } from '../helper/general';
import styles from '../styles/Home.module.css';
import dataMatchProduct from '../helper/dataMatchProduct.json'
import InternalCampaignDummy from '../components/InternalCampaignDummy';
import LatestArticles from '../components/LatestArticles';
import Footer from '../components/Footer';
import LatestReviews from '../components/LatestReviews';
import Billboard from '../components/Billboard';

export default function Home() {
  const [dataEditor, setDataEditor] = useState([]);
  const [dataArticles, setDataArticles] = useState([]);
  const [dataReview, setDataReview] = useState([]);

  const getData = async () => {
    const data = await getDataEditor();

    setDataEditor(data["editor's choice"]);
    setDataArticles(data["latest articles"])
    setDataReview(data["latest review"])
  };

  useEffect(() => {
   getData()

  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Female Daily - Info, Artikel, Video dan Review Seputar Kecantikan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Billboard />
      {
        dataEditor.length > 0 ? <EditorChoice data={dataEditor} /> :  <Box sx={{ pt: 0.5 }}>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
      } 
      <br />
      <br />
      <LookingProduct data={dataMatchProduct} />
      <InternalCampaignDummy />
      <LatestArticles data={dataArticles} />
      <LatestReviews data={dataReview} />
      <Footer />
    </div>
  )
}
