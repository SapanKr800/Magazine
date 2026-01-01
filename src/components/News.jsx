import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios'
import Wrapper from './Wrapper';
import { useNewsContext } from '../context/NewsContext';
import NewsCardSkeleton from './NewsCardSkeleton';


const News = () => {

    const { data, loading } = useNewsContext();
        console.log(import.meta.env.VITE_GNEWS_API_KEY);

    return (
        <>

            <Wrapper>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 my-10 md:px-4 '>

                    {loading ? Array.from({ length: 8 }).map((_, i) => (
                        <NewsCardSkeleton key={i} />
                    )) :

                        data.map((details, i) => {
                            return (
                                <NewsCard details={details} key={i} />
                            )
                        })
                    }

                </div>

            </Wrapper>

            
        </>
    )
}

export default News
