import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import FeaturesGarden from '../components/FeaturesGarden';
import GardeningEvents from '../components/GardeningEvents';
import GardeningKnowledgeHub from '../components/GardeningKnowledgeHub';
import TopTrendingTips from '../components/TopTrendingTips';
import { useLoaderData } from 'react-router';

const HomeLayout = () => {

    useEffect(() => {
        document.title = "Plant Mates | home";
      }, []);

    const allTips = useLoaderData();
    // console.log(allTips);

    return (
        <div className='space-y-24'>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <TopTrendingTips allTips={allTips}></TopTrendingTips>
            </section>
            <section>
                <GardeningEvents></GardeningEvents>
            </section>
            <section>
                <GardeningKnowledgeHub></GardeningKnowledgeHub>
            </section>
            <section>
                <FeaturesGarden></FeaturesGarden>
            </section>
        </div>
    );
};

export default HomeLayout;