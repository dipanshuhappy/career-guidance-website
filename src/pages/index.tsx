import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "~/components/layout";
import { AiOutlineStar } from "react-icons/ai"

import { api } from "~/utils/api";
import Categories from "~/components/categories";
import NewsCard from "~/components/newsCard";
import PopularCollege from "~/components/popularCollege";
const HeroHeader = () => (
  <div className="hero w-full  bg-[#F6F6F6]   pl-8 pt-8 pb-8">
    <div className="text-left hero-content flex w-full flex-col justify-end">

      <p className=" w-full text-gray-400 text-sm">WE GUIDE, YOU FIND !</p>
      <p className="text-left w-full text-black font-bold text-4xl tracking-[.2rem]">The New Way To
        <br />
        Find your College!</p>
      <p className="w-full text-gray-400 text-sm">BOOK A CALL WITH US</p>
      <div w->

      </div>
      <button className=" btn px-6 rounded-full text-white border-none mr-auto mt-[10%]  bg-[#FEB53E]">Book Now</button>
    </div>
  </div>
)
const BookNowHero = () => (
  <div className="mt-12 hero w-full text-white grid  bg-[#3E3E3E]  place-items-center  pl-8 pt-8 pb-8">
    <div className="w-full ">
      <p className="my-8 text-center font-bold text-2xl">
        We have a team of expert to help you.
      </p>
      <p className="my-8 text-center text-lg line">
        Experts know about college, and trained to understand your need to suggest you best college.
      </p>
      <button className="grid m-8 btn px-6 rounded-full text-white border-none mx-auto  bg-[#FEB53E]">Book Now</button>
    </div>
  </div>

)


const FeaturedCollege = ({ title, description }: { title: string, description: string }) => (
  <div className="w-1/3 bg-[#3E3E3E] place-items-center grid px-7 py-12 ">
    <div>
      <div className=" text-center border-slate-400 text-lg text-white font-bold p-2 border-2 min-w-fit">{title}</div>
      <p className="text-center text-sm">{description} </p>
    </div>
  </div>
)

const RecentBlog = () => (<div className="border-2  border-gray-300 rounded-2xl w-full my-10">
  <div className="flex items-center justify-between">
    <p className="text-left m-6 font-bold  text-black">Recent Blogs</p>
    <div className="flex">
      <button className="btn btn-ghost text-black btn-xs ">{"<"}</button>

      <button className="btn btn-ghost text-black btn-xs ">{">"}</button>

    </div>
  </div>

  <div className="bg-slate-500 w-full h-[2px] rounded-2xl"></div>
  <>
    <p className="text-left m-6 font-bold text-sm text-black">Story</p>
    <p className="text-left m-6 ">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    </p>
  </>
</div>)
const GroupOfColleges = () => (<div className="border-2 border-gray-300 rounded-2xl w-full my-10">
  <p className="text-left m-6 font-bold  text-black">Group Of Colleges</p>
  <div className="bg-slate-500 w-full h-[2px] rounded-2xl"></div>
  <div className=" grid grid-cols-2 grid-rows-3  place-items-center p-3 ">
    <img className="w-20 h-20" src="group_of_colleges/2.png" />
    <img className="w-20 h-20" src="group_of_colleges/1.png" />
    <img className="w-20 h-20" src="group_of_colleges/3.png" />
    <img className="w-20 h-20" src="group_of_colleges/8.png" />
    <img className="w-20 h-20" src="group_of_colleges/5.png" />
    <img className="w-20 h-20" src="group_of_colleges/6.png" />
  </div>
</div>)

const CollegeCard = ({ title, name, location }: { title: string, name: string, location: string }) => {
  return (
    <div className="p-12"  >
      <p className=" my-2 text-gray-400">{title}</p>
      <p className="text-black font-bold text-l">{name},
        <br />
        {location}</p>
      <img alt="university image" className="w-full object-cover  " src="data:image/jpeg;base64,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" />
      <p className="my-3 text-green-400">Read more...</p>
    </div>
  );
}
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroHeader />
        <div className="w-full flex my-10 gap-3">
          <FeaturedCollege description="Top of the table" title="COLLEGE THAT TOPED THIS YEAR" />
          <FeaturedCollege description="RECOGNISED BY NAAC" title="NAAC A+" />
          <FeaturedCollege description="LOVED BY ALUMNI" title="Top Private" />
        </div>
        <div className="grid" style={{
          gridTemplateAreas: `
            "category  featured featured college1"
            "ads featured featured college2"
          
          `

        }}>
          <Categories categories={["item1", "item2", "item3", "item4", "item5"]} />

          <div style={{ gridArea: "ads" }} className="grid w-full h-full">
            <div className="artboard  text-center grid place-items-center  w-[270px] h-[222px]" >
              Ads
            </div>
          </div>

          <div className="border-[6px] h-full justify-evenly  w-full bg-[#F3F3F3] border-yellow-300 rounded-lg flex flex-col p-4" style={{ gridArea: "featured" }}>
            <div className="flex justify-around">
              <div className="font-bold text-lg text-left text-black w-1/2">Featured College</div>
              <button className="button rounded-full p-3 bg-[#FAAD3D]"><AiOutlineStar color="white" /></button>
            </div>
            <img alt="university image" className="w-full object-cover  h-1/3" src="data:image/jpeg;base64,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" />
            <div className='my-2 text-center  text-black font-bold'>
              Sharda University,
              <br />
              Greater Noida
            </div>
            <div className="text-center text-gray-500 font-semibold text-md">
              Rating: <p className="text-[#FAAD3D] font-bold text-2xl">500+</p>
            </div>
            <div>
              <div className="flex w-full justify-around">
                <span>
                  <p className="float-left">5 star ratings ⭐</p>
                  <p className="float-right">Out of <p className="font-bold">24</p></p>
                </span>
              </div>
              <progress className="grid mx-auto h-4 progress progress-warning w-10/12" value="70" max="100"></progress>
            </div>
            <div>
              <p className="text-center">Hurry Up! Admission end in:</p>
              <div className="btn-group mx-auto bg-slate-200 w-1/2 grid grid-flow-col place-items-center">
                <button className="btn border-none bg-slate-200">1
                </button>
                <button className="btn border-none bg-slate-200">2</button>
                <button className="btn border-none bg-slate-200">3</button>

              </div>
              <div className=" mx-auto   w-1/2 grid grid-flow-col place-items-center">
                <p className="text-sm">hours
                </p>
                <p className="text-sm">Mins</p>
                <p className="text-sm">Seconds</p>

              </div>
            </div>
          </div>
          <div className="p-8" style={{ gridArea: "college1" }} >
            <p className=" my-2 text-gray-400">Best Governent College</p>
            <p className="text-black font-bold text-l">Banaras Hindu University,
              <br />
              Uttar Pradesh.</p>
            <img alt="university image" className="w-full object-cover  " src="data:image/jpeg;base64,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" />
            <p className="my-3 text-green-400">Read more...</p>
          </div>
          <div className="p-8" style={{ gridArea: "college2" }} >
            <p className=" my-2 text-gray-400">Best Governent College</p>
            <p className="text-black font-bold text-l">Banaras Hindu University,
              <br />
              Uttar Pradesh.</p>
            <img alt="university image" className="w-full object-cover  " src="data:image/jpeg;base64,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" />
            <p className="my-3 text-green-400">Read more...</p>
          </div>
        </div>
        <BookNowHero />

        <div className="flex">
          <div className="w-1/3">
            <PopularCollege />
            <GroupOfColleges />
            <RecentBlog />
            <NewsCard date="06 Aug 2021" title="You are not a loser , you are  just really bad at winning" />
          </div>
          <div className="w-full  h-fit" >
            <div className="flex w-full text-center justify-between p-10">
              <p className="text-black font-bold text-xl">Select By Region</p>
              <ul className="menu menu-horizontal  text-black rounded-box">
                <li><a className="font-extrabold ">Delhi</a></li>
                <li><a>Bihar</a></li>
                <li><a>U.P</a></li>
              </ul>
            </div>
            <div className="grid h-fit grid-cols-3 auto-rows-min">
              <CollegeCard location="Uttar Pradesh." title="Best Governent College" name="Banaras Hindu University" />
              <CollegeCard location="Uttar Pradesh." title="Best Governent College" name="Banaras Hindu University" />
              <CollegeCard location="Uttar Pradesh." title="Best Governent College" name="Banaras Hindu University" />
              <CollegeCard location="Uttar Pradesh." title="Best Governent College" name="Banaras Hindu University" />
              <CollegeCard location="Uttar Pradesh." title="Best Governent College" name="Banaras Hindu University" />
              <CollegeCard location="Uttar Pradesh." title="Best Governent College" name="Banaras Hindu University" />
              <CollegeCard location="Uttar Pradesh." title="Best Governent College" name="Banaras Hindu University" />
            </div>
            <div className="flex w-full text-center justify-between p-10">
              <p className="text-black font-bold text-xl">News</p>
              <p className="text-black font-bold text-sm ">these Blogs are written by the students of college, for you. </p>
            </div>

            <div className="ml-5 grid grid-cols-3 auto-rows-min gap-4">
              <NewsCard date="06 Aug 2021" title="You are not a loser , you are  just really bad at winning" />
              <NewsCard date="06 Aug 2021" title="You are not a loser , you are  just really bad at winning" />
              <NewsCard date="06 Aug 2021" title="You are not a loser , you are  just really bad at winning" />
            </div>
          </div>

        </div>


      </Layout>
    </>
  );
};

export default Home;
