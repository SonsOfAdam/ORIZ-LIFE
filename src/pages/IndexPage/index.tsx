import {
  AppStore,
  AppStoreBlk,
  AppView,
  BackArrow,
  Bloomberg,
  CrunchBase,
  DownArrowYellow,
  Dumbell,
  Facebook,
  FitnessApparel,
  FooterAppView,
  FooterLogo,
  HealthCoaching,
  Multinational,
  Nutrition,
  Organic,
  Playstore,
  PromoTag,
  QuickOnboarding,
  RightArrow,
  RightArrowWhite,
  Spa,
  SquiglyLine,
  Supplements,
  Techcrunch,
  Yahoo,
} from "@/assets/svg";
import ORIZLady from "@/assets/image/ORIZ-Lady.png";
import HamburgerMenuComponent from "@/components/hamburger-menu";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const scrollablesFeatures = [
  { title: "Fitness Classes & Programs", image: Dumbell },
  { title: "Spa & Wellness Services", image: Spa },
  { title: "Nutrition & Meal Plans", image: Nutrition },
  { title: "Health Coaching & Consultations", image: HealthCoaching },
  { title: "Natural & Organic Products", image: Organic },
  { title: "Wellness Products & Supplement", image: Supplements },
  { title: "Quick and easy onboarding", image: QuickOnboarding },
  { title: "Fitness Apparel & Accessories", image: FitnessApparel },
  { title: "Fitness Classes & Programs", image: Dumbell },
  { title: "Spa & Wellness Services", image: Spa },
  { title: "Nutrition & Meal Plans", image: Nutrition },
  { title: "Health Coaching & Consultations", image: HealthCoaching },
  { title: "Natural & Organic Products", image: Organic },
  { title: "Wellness Products & Supplement", image: Supplements },
  { title: "Quick and easy onboarding", image: QuickOnboarding },
  { title: "Fitness Apparel & Accessories", image: FitnessApparel },
];

const IndexPage = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef?.current;
    // @ts-ignore
    const marqueeWidth = marquee?.scrollWidth;

    gsap.to(marquee, {
      x: -marqueeWidth,
      duration: 50,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth),
      },
    });
  }, []);

  return (
    <main>
      <section className="bg-black">
        <nav className="mx-auto flex w-11/12 items-center justify-between pt-7 font-jakarta text-white lg:pt-14 2xl:max-w-[1440px]">
          <a href="#">
            <img src="src/assets/svg/oriz-logo.svg" alt="Oriz logo" />
          </a>

          <ul className="hidden gap-8 lg:flex">
            <li className="text-base font-medium">
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li className="text-base font-medium">
              <a href="#">Partners</a>
            </li>
            <li className="text-base font-medium">
              <a href="#">Stories</a>
            </li>
          </ul>

          <div className="hidden gap-x-6 lg:flex">
            <a href="#" className="rounded-xl border-[2px] border-white px-9 py-5">
              Sign In
            </a>

            <button className="rounded-xl bg-[#252525] px-4">Get Started— For Free</button>
          </div>

          <HamburgerMenuComponent />
        </nav>

        <div className="mx-auto mt-16 grid w-11/12 text-white lg:hidden 2xl:max-w-[1440px]">
          <button className="mb-[33px] flex w-fit items-center gap-x-2 rounded-[333px] border border-[#6C6C6C] bg-[#2A2A2A] px-4 py-3">
            <span className="bg rounded-[166px] bg-green-100 px-[13px] py-[5px]">New</span>{" "}
            <span>We’re live across all African Countries</span>
            <img src={RightArrowWhite} alt="forward arrow icon" />
          </button>

          <img src={ORIZLady} alt="A smilling lady" className="mb-10 w-full rounded-[50px]" />

          <div>
            <h2 className="font-duplicate-sans text-[35px] leading-tight lg:text-[66px]">
              Personalised plans for your unique{" "}
              <span className="relative">
                wellness
                <span className="absolute -bottom-2.5 left-0 hidden lg:block">
                  <img src={SquiglyLine} alt="Squigly line" />
                </span>
              </span>{" "}
              Journey
            </h2>
            <p className="my-8 font-jakarta text-base leading-10">
              ORIZ is a solution for your health and wellness journey, providing you with personalized tools and benefits to help you lead a
              healthier life.
            </p>

            <div className="flex flex-col gap-x-6 gap-y-3">
              <button className="rounded-xl bg-green-100 px-9 py-5 text-base">
                <span className="font-medium">Use Oriz AI</span> — For Free!{" "}
              </button>

              <button className="flex h-[50px] items-center justify-center rounded-xl bg-[#252525] px-9 text-base text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 hidden w-11/12 grid-cols-2 items-center text-white lg:grid 2xl:max-w-[1440px]">
          <div>
            <button className="mb-[33px] flex items-center gap-x-2 rounded-[333px] border border-[#6C6C6C] bg-[#2A2A2A] px-4 py-3">
              <span className="bg rounded-[166px] bg-green-100 px-[13px] py-[5px]">New</span>{" "}
              <span>We’re live across all African Countries</span>
              <img src={RightArrowWhite} alt="forward arrow icon" />
            </button>

            <h2 className="max-w-[600px] font-duplicate-sans text-[66px] leading-tight">
              Personalised plans for your unique{" "}
              <span className="relative">
                wellness
                <span className="absolute -bottom-2.5 left-0">
                  <img src={SquiglyLine} alt="Squigly line" />
                </span>
              </span>{" "}
              Journey
            </h2>
            <p className="my-8 max-w-[400px] font-jakarta text-base leading-10">
              ORIZ is a solution for your health and wellness journey, providing you with personalized tools and benefits to help you lead a
              healthier life.
            </p>

            <div className="flex gap-x-6">
              <button className="rounded-xl bg-green-100 px-9 py-5 text-base">
                <span className="font-medium">Use Oriz AI</span> — For Free!{" "}
              </button>

              <button className="rounded-xl bg-white px-9 text-base text-black">Learn More</button>
            </div>
          </div>

          <img src={ORIZLady} alt="A smilling lady" className="ml-auto rounded-[50px]" />
        </div>

        <div className="mx-auto mt-20 w-11/12 pb-12 2xl:max-w-[1440px]">
          <h4 className="mb-7 text-pitch-white">Featured on</h4>
          <div className="flex flex-wrap justify-between gap-[42px]">
            <img src={Yahoo} alt="Yahoo logo" />
            <img src={Bloomberg} alt="Bloomberg logo" />
            <img src={Techcrunch} alt="Techcrunch logo" />
            <img src={CrunchBase} alt="CrunchBase logo" />
          </div>
        </div>

        <div className="flex gap-x-5 py-4" ref={marqueeRef}>
          {scrollablesFeatures.map((feature, index) => (
            <div className="flex items-center gap-x-2 rounded-lg border border-[#ffffff26] bg-[#ffffff26] px-4 py-2.5">
              <img src={feature.image} alt={feature.title} key={index} />
              <p className="truncate font-jakarta text-sm text-white">{feature.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 w-11/12 2xl:max-w-[1440px] 2xl:overflow-hidden">
        <div className="flex flex-col justify-between xl:flex-row">
          <div className="">
            <h3 className="font-duplicate-sans text-[66px] leading-tight text-pitch-white xl:max-w-[500px]">
              We are trusted by <span className="text-[#ED5E3B]">a community</span> of <br />
              <span className="text-black">1 Million+</span> Africans
            </h3>

            <p className="mt-8 text-xl leading-loose xl:max-w-[480px]">
              We help you build a healthy lifestyle using an incentivised reward called ORIZ tokens — redeemable for discounts and benefits.
            </p>

            <div className="mt-12 flex flex-col gap-x-5 gap-y-4 lg:flex-row">
              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-5 text-base text-white">
                <img src={Playstore} alt="Play store icon" />
                Get on Google Play
              </button>

              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-5 text-base text-white">
                <img src={AppStore} alt="app store icon" /> Get on App Store
              </button>
            </div>
          </div>

          <div className="mt-16 flex justify-center xl:-mr-[9%]">
            <img src="src/assets/svg/oriz-lady2.svg" alt="Oriz lady" className="hidden xl:block" />
            <img src="src/assets/svg/oriz-lady2-mobile.svg" alt="Oriz lady" className="w-full xl:hidden" />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-[9%] xl:flex-row">
          <img src="src/assets/svg/oriz-banner.svg" className="-ml-[9%] xl:-mt-96" alt="Oriz banner" />

          <div className="w-full">
            <ol className="font-duplicate-sans text-[41px]">
              <li className="border-b border-[#E9E9E9] p-10">
                <div>
                  <span className="mr-7 text-2xl text-[#ED5E3B]">01</span> Gym plans
                </div>

                <p className="mt-4 max-w-[450px] font-jakarta text-2xl leading-relaxed text-[#575757]">
                  Discounted gym memberships plan across our partners in Africa.
                </p>
              </li>

              <li className="border-b border-[#E9E9E9] p-10">
                <span className="mr-7 text-2xl text-[#B9B9B9]">02</span> Meals Plan
              </li>

              <li className="border-b border-[#E9E9E9] p-10">
                <span className="mr-7 text-2xl text-[#B9B9B9]">03</span> Ai Integration
              </li>

              <li className="border-b border-[#E9E9E9] p-10">
                <span className="mr-7 text-2xl text-[#B9B9B9]">04</span> Tokenize Rewards
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-20 grid items-center lg:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="max-w-[650px] font-duplicate-sans text-7xl">We’re your partner for a healthier future. </h3>
            <p className="mt-10 max-w-[565px] font-jakarta text-xl">
              Prioritise proactive self-care, with our affordable, incentivised health and wellness Solutions
            </p>
          </div>

          <div className="mt-[50px] flex justify-center lg:justify-start">
            <img src={Multinational} alt="" />
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-between">
            <div className="hidden items-center gap-6 lg:flex">
              <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#218068] font-duplicate-sans text-3xl text-white">
                01
              </span>{" "}
              <h3 className="font-duplicate-sans text-[44px]">Fitness & Wellness Plans</h3>
            </div>

            <div className="ml-auto flex items-center gap-6 lg:ml-[unset]">
              <button className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-black">
                <img src={BackArrow} alt="back arrow icon" />
              </button>
              <button className="flex items-center gap-x-2.5 rounded-[49px] bg-[#F5F5F5] px-7 py-6 text-xl">
                Next <img src={RightArrow} alt="forward arrow icon" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex max-h-[1000px] flex-col justify-between gap-x-8 overflow-hidden rounded-[49px] border-[4px] border-[#000000] bg-[#195D4C] px-12 py-20 lg:h-[650px] lg:flex-row">
            <div>
              <h3 className="font-duplicate-sans text-[53px] leading-tight text-white lg:max-w-[452px]">
                Access to health, Fitness & wellness options
              </h3>

              <p className="my-[33px] font-jakarta text-xl text-white lg:max-w-[455px]">
                Our  plans allows you to access various gyms, fitness programs, wellness centers, and healthy nutritional options,  all over
                the globe.
              </p>

              <div className="hidden items-center gap-x-6 xl:flex">
                <button className="flex items-center gap-x-1 rounded-[13px] bg-white px-9 py-[21px]">
                  Get Started — For Free! <img src={RightArrow} alt="forward arrow icon" />
                </button>

                <a href="#" className="rounded-[13px] bg-[#f5f5f536] px-9 py-[21px] text-white">
                  Learn More
                </a>
              </div>

              <p className="mt-3 font-jakarta text-base text-white">*Up-to 15% exclusive discounts on any of our Services</p>
            </div>

            <div className="w-full xl:w-[unset]">
              <img src={AppView} alt="app store icon" />
            </div>
          </div>

          <div className="mt-3 flex gap-x-5">
            <div className="h-[31px] w-[31px] rounded-full border-[4px] border-black bg-[#195D4C]"></div>
            <div className="h-[31px] w-[31px] rounded-full bg-[#D9D9D9]"></div>
          </div>
        </div>
      </section>

      <section className="mt-8" style={{ background: "linear-gradient(to bottom, white 0%, white 35%, black 35%, black 100%)" }}>
        <div className="mx-auto grid w-11/12 gap-8 xl:grid-cols-2 2xl:max-w-[1440px]">
          <div className="h-[735px] overflow-hidden rounded-[50px] border-[5px] bg-[#FF884D] px-10 pt-14">
            <h3 className="mb-6 max-w-[254px] font-duplicate-sans text-5xl text-white">join our Community</h3>
            <p className="max-w-[420px] font-jakarta text-white">
              Connect with like-minded individuals, fitness enthusiasts, and experts in our thriving community.
            </p>

            <div className="mt-8 flex flex-col gap-x-5 gap-y-3 xl:flex-row">
              <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-base">
                <img src={Playstore} alt="Play store icon" />
                Get on Google Play
              </button>

              <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-base">
                <img src={AppStoreBlk} alt="app store icon" /> Get on App Store
              </button>
            </div>

            <img src="src/assets/svg/outer-frame2.svg" alt="" />
          </div>

          <div className="h-[735px] overflow-hidden rounded-[50px] border-[5px] bg-[#FFF8E4] px-10 pt-14">
            <h3 className="mb-6 max-w-[254px] font-duplicate-sans text-5xl">Tokenized Rewards</h3>
            <p className="max-w-[420px] font-jakarta">Earn ORIZ tokens for healthy activities, redeemable for discounts and benefits.</p>

            <div className="mt-8 flex flex-col gap-x-5 gap-y-3 xl:flex-row">
              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-[18px] text-base text-white">
                <img src={Playstore} alt="Play store icon" />
                Get on Google Play
              </button>

              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-[18px] text-base text-white">
                <img src={AppStore} alt="app store icon" /> Get on App Store
              </button>
            </div>

            <img src="src/assets/svg/outer-frame.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-black pb-80 pt-8">
        <div className="relative mx-auto mt-6 flex w-11/12 justify-between rounded-[49px] border-[4px] border-[#2B2B2B] bg-[#218168] px-12 py-20 2xl:max-w-[1440px]">
          <div>
            <h3 className="max-w-[452px] font-duplicate-sans text-[53px] leading-tight text-white">Oriz MarketPlace</h3>

            <p className="my-[33px] max-w-[455px] font-jakarta text-xl text-white">
               Take advantage of oriz marketplace to explore and purchase a variety of fitness-related products.
            </p>

            <div className="flex items-center gap-x-6">
              <button className="flex items-center gap-x-2 rounded-[13px] bg-white px-9 py-[21px]">
                Get Started — For Free! <img src={RightArrow} alt="forward arrow icon" />
              </button>

              <a href="#" className="rounded-[13px] bg-[#f5f5f536] px-9 py-[21px] text-white">
                Learn More
              </a>
            </div>

            <div className="mt-8 flex">
              <img src={PromoTag} alt="Promo Tag icon" />
              <p className="max-w-[297px] font-jakarta text-base text-white">
                Up-to 15% exclusive discounts on healthcare services, gym memberships, wearables, and more!
              </p>
            </div>
          </div>

          <div className="absolute -bottom-80 lg:-right-32">
            <img src="src/assets/svg/web-frame.svg" alt="" />
          </div>
        </div>

        <div className="mx-auto mt-96 w-8/12 lg:mt-8 2xl:max-w-[1440px]">
          <h4 className="font-duplicate-sans text-[50px] text-white">Coming Soon on</h4>

          <div className="mt-4 flex flex-col gap-y-3 lg:mt-0 xl:flex-row xl:gap-x-5">
            <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px]">
              <img src={Playstore} alt="Play store icon" />
              Google Play
            </button>

            <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px]">
              <img src={AppStoreBlk} alt="app store icon" /> App Store
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-black pb-10 pt-8">
          <div className="mx-auto mt-6 w-11/12 py-20 2xl:max-w-[1440px]">
            <div className="flex items-center justify-between gap-x-2">
              <h3 className="mb-14 font-jakarta text-[27px] text-white lg:text-7xl">Categories of partners</h3>
              <img src={DownArrowYellow} alt="down arrow icon" />
            </div>

            <div className="grid grid-cols-2 gap-5 sm:flex sm:flex-wrap lg:justify-between">
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFDFEB] px-[31px] py-[28px] text-base">
                <p className="text-center">Gym & Spas’</p>
              </div>
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFF3ED] px-[31px] py-[28px] text-base">
                <p className="text-center">
                  Nutrition
                  <br />
                  Experts
                </p>
              </div>
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFF8E4] px-[31px] py-[28px] text-base">
                <p className="text-center">
                  Health
                  <br />
                  Centres
                </p>
              </div>
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#DAEFE3] px-[31px] py-[28px] text-base">
                <p className="text-center">
                  Fitness
                  <br />
                  Centres
                </p>
              </div>
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFF8E4] px-[31px] py-[28px] text-base">
                <p className="text-center">
                  Health
                  <br />
                  Coach
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "linear-gradient(to bottom, black 0%, black 35%, white 35%, white 100%)" }}>
          <div className="mx-auto flex w-11/12 justify-center py-20 pt-6 2xl:max-w-[1440px]">
            <img src="src/assets/svg/oriz-partners.svg" alt="oriz partners view" className="w-full" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-11/12 lg:w-full 2xl:max-w-[1440px]">
          <div className="flex flex-col justify-between gap-y-5 lg:flex-row lg:items-end">
            <div className="lg:ml-[15%]">
              <h3 className="font-duplicate-sans text-[35px] text-[#BCC1C8] lg:text-[65px]">Join the network</h3>
              <p className="font-jakarta text-base lg:max-w-[518px] lg:text-[24px]">
                We help you build a healthy lifestyle and reward you with blockchain rewards and other incentives.{" "}
              </p>
            </div>

            <div className="flex flex-col gap-x-6 gap-y-4 lg:mr-4 lg:flex-row">
              <button className="rounded-xl bg-[#252525] px-9 py-5 text-base text-white">
                <span className="font-medium">Use Oriz AI</span> — For Free!{" "}
              </button>

              <button className="flex h-[50px] items-center justify-center rounded-xl bg-green-100 px-9 text-base text-white lg:bg-[#F0F0F0] lg:text-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-56 pt-52" style={{ background: "linear-gradient(to bottom, white 0%, white 45%, #0C513F 45%, #0C513F 100%)" }}>
        <div className="mx-auto grid w-11/12 items-center justify-items-center gap-y-20 xl:grid-cols-3 2xl:max-w-[1440px]">
          <div className="relative w-fit rounded-[25px] border-[4px] border-black bg-white px-[50px] pb-[54px] pt-[58px]">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-[9px] border-[4px] bg-[#FFC501] px-4 py-1.5">
              Basic Plan
            </span>
            <h4 className="font-duplicate-sans text-[83px] text-[#218068]">$19.99</h4>

            <ul className="max-w-[278px] font-jakarta text-[13px]">
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Access to basic features and functionalities of the ORIZ platform
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Personalised health and wellness recommendations based on user data
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Integration with fitness trackers and wearables for activity tracking
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Basic access to blockchain rewards and incentives Access to gym once a week
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">5% Discount on all MarketPlace Products</li>
              <li>Health and wellness resources, educational materials, and online tools</li>
            </ul>

            <button className="mt-9 h-[59px] w-full rounded-3xl bg-black font-duplicate-sans text-[25px] font-semibold text-white">
              Subscribe — <span className="font-duplicate-sans-regular text-base">Monthly</span>
            </button>
          </div>

          <div className="relative w-fit rounded-[25px] border-[4px] border-black bg-white px-[50px] pb-[54px] pt-[58px]">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-[9px] border-[4px] bg-[#FFC501] px-4 py-1.5">
              Premium Plan
            </span>
            <h4 className="font-duplicate-sans text-[83px] text-[#218068]">$29.99</h4>

            <ul className="max-w-[278px] font-jakarta text-[13px]">
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">All features included in the Basic Plan</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Advanced data analytics and insights for deeper understanding of personal health trends
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Enhanced integration with healthcare providers and access to telemedicine services
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">Premium access to blockchain rewards and incentives</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Exclusive discounts and offers from partner wellness brands (Create 2 wellness service) Gym 2 times weekly.
              </li>
              <li>10% Discount on all MarketPlace Products.</li>
              <li>Health and wellness resources, educational materials, and online tools</li>
            </ul>

            <button className="mt-9 h-[59px] w-full rounded-3xl bg-black font-duplicate-sans text-[25px] font-semibold text-white">
              Subscribe — <span className="font-duplicate-sans-regular text-base">Monthly</span>
            </button>
          </div>

          <div className="relative w-fit rounded-[25px] border-[4px] border-black bg-white px-[50px] pb-[54px] pt-[58px]">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-[9px] border-[4px] bg-[#FFC501] px-4 py-1.5">
              Platnium Plan
            </span>
            <h4 className="font-duplicate-sans text-[83px] text-[#218068]">$39.99</h4>

            <ul className="max-w-[278px] font-jakarta text-[13px]">
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">All features included in the Premium Plan</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">Insurance cover basic ( Designed by Team )</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">Gym 3 times weekly</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">Discounted costs on Spa sessions</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">15% Discount on all MarketPlace Products.</li>
              <li>Exclusive discounts and offers from partner wellness brands (Create 4 wellness service)</li>
              <li>Health and wellness resources, educational materials, and online tools.</li>
            </ul>

            <button className="mt-9 h-[59px] w-full rounded-3xl bg-black font-duplicate-sans text-[25px] font-semibold text-white">
              Subscribe — <span className="font-duplicate-sans-regular text-base">Monthly</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="overflow-hidden">
        <div className="" style={{ background: "linear-gradient(to bottom, #0C513F 0%, #0C513F 45%, black 45%, black 100%)" }}>
          <div className="relative mx-auto flex w-11/12 flex-col-reverse justify-between gap-y-16 pb-20 pt-28 lg:flex-row lg:items-end 2xl:max-w-[1440px]">
            <div className="mb-10">
              <img src={FooterLogo} alt="Oriz logo" />
              <p className="my-6 max-w-[455px] font-jakarta text-xl text-white">
                Revolutionising health and wellness with cutting-edge technology
              </p>
              <div className="flex flex-col gap-y-2.5 lg:flex-row lg:gap-x-5">
                <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px] lg:justify-start">
                  <img src={Playstore} alt="Play store icon" />
                  Google Play
                </button>

                <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px] lg:justify-start">
                  <img src={AppStoreBlk} alt="app store icon" /> App Store
                </button>
              </div>
            </div>

            <div className="relative top-0 lg:-right-[9%]">
              <img src={FooterAppView} alt="Oriz app preview" />
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="mx-auto grid w-11/12 justify-between gap-y-11 border-y border-[#2D2D2D] py-20 md:grid-cols-2 xl:flex 2xl:max-w-[1440px]">
            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Products</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">Fitness Plans</a>
                </li>
                <li>
                  <a href="#">Nutrition Plans</a>
                </li>
                <li>
                  <a href="#">Exclusive discounts</a>
                </li>
                <li>
                  <a href="#">Tokenised Rewards</a>
                </li>
                <li>
                  <a href="#">Resource Library</a>
                </li>
                <li>
                  <a href="#">Marketplace</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Resources</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Marketplace</a>
                </li>
                <li>
                  <a href="#">AI Library</a>
                </li>
                <li>
                  <a href="#">Demo</a>
                </li>
                <li>
                  <a href="#">Join Telegram</a>
                </li>
                <li>
                  <a href="#">Consumers</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Use Cases</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">Employee</a>
                </li>
                <li>
                  <a href="#">Creators</a>
                </li>
                <li>
                  <a href="#">Entreprenuer</a>
                </li>
                <li>
                  <a href="#">Business Owners</a>
                </li>
                <li>
                  <a href="#">Employer</a>
                </li>
                <li>
                  <a href="#">Professionals</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Company</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Stories</a>
                </li>
                <li>
                  <a href="#">Press & Media</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Legal</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">End-User Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Developer Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto flex w-11/12 flex-col items-center justify-between gap-y-6 py-14 lg:flex-row 2xl:max-w-[1440px]">
            <p className="text-white">© Oris technologies Nigeria Limited</p>

            <ul className="flex gap-x-4">
              <li>
                <a href="#">
                  <img src={Facebook} alt="facebook logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="src/assets/svg/twitter.svg" alt="twitter logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="src/assets/svg/instagram.svg" alt="instagram logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="src/assets/svg/linkedin.svg" alt="linkedin logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="src/assets/svg/telegram.svg" alt="telegram logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
