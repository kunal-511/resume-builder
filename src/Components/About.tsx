import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full h-[100vh] bg-custom1 mt-8 flex about">
    <div className='w-[70%] h-[30rem] mt-14 bg-white round-borders flex flex-col items-center justify-center p-12 '>
        <h1 className='uppercase font-bold text-2xl text-slate-700 w-[15rem] '>Who we are?</h1>
        <p className='p-12 text-[1.2rem]  italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt eveniet sunt omnis magni quos, laboriosam similique facere nobis nostrum vitae aspernatur cumque eaque eos tenetur delectus quod culpa ad, laudantium nemo aliquam. Sequi mollitia vero non, quos pariatur quo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel maiores debitis fugiat. Nemo explicabo obcaecati perferendis odio ipsam veniam. </p>
    </div>
</div>
  );
};

export default About;



