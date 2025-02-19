import React from 'react'
import { cn } from "@/lib/utils";
import { Marquee } from '@/components/magicui/marquee';

const reviews = [
    {
      name: "Michael Thompson",
      username: "@michael_t",
      body: "Our workflow has never been smoother! The automation solutions saved us countless hours.",
      img: "https://avatar.vercel.sh/michael",
    },
    {
      name: "Sophia Carter",
      username: "@sophia_c",
      body: "Incredible automation services! Our productivity skyrocketed within weeks.",
      img: "https://avatar.vercel.sh/sophia",
    },
    {
      name: "Daniel Roberts",
      username: "@daniel_r",
      body: "From manual chaos to full automation—best decision we've made for our business!",
      img: "https://avatar.vercel.sh/daniel",
    },
    {
      name: "Emily Johnson",
      username: "@emily_j",
      body: "The AI-driven automation reduced our operational costs by 40%. Truly game-changing!",
      img: "https://avatar.vercel.sh/emily",
    },
    {
      name: "Ryan Foster",
      username: "@ryan_f",
      body: "Customer support is outstanding! Their team ensures seamless integration and smooth scaling.",
      img: "https://avatar.vercel.sh/ryan",
    },
    {
      name: "Olivia Brooks",
      username: "@olivia_b",
      body: "We automated our marketing campaigns, and the results have been phenomenal!",
      img: "https://avatar.vercel.sh/olivia",
    },
  ];
  

  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}



function Testimonials() {
  return (
    <div  className='flex flex-col w-full justify-between mx-auto p-12 border-2 border-gray-500'>
        <h1 className='text-3xl font-inter mt-4 font-bold text-center'>
        See What Our People Are  
        Saying About Us
        </h1>

        <div className='mt-8'>

<MarqueeDemo  />
        </div>


    </div>
  )
}

export default Testimonials