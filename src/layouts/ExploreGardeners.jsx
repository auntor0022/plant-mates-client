import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import GardenerCard from '../components/GardenerCard';

const ExploreGardeners = () => {

    useEffect(() => {
        document.title = "Plant Mates | explore-gardeners";
      }, []);

    const gardeners = useLoaderData();
    // console.log(gardeners);

    return (
        <div className='container mx-auto mt-12'>
            <div className='mb-10 text-center'>
                <h1 className='mb-2 text-secondary font-bold text-4xl'>Meet Our Gardeners</h1>
            <p className='text-base-content/80'> Explore the profiles of passionate gardeners sharing green wisdom and growing together.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-5'>
                {
                    gardeners.map((gardener)=><GardenerCard key={gardener._id} gardener={gardener}></GardenerCard>)
                }
            </div>
        </div>
    );
};

export default ExploreGardeners;