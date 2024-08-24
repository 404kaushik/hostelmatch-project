import { useState } from "react";
import Review from "./Review";
const ReviewList=(p
//     : {
//     reviews: Record<string, any>[],
//   }
  ) =>{

    // console.log("reviewList",p)
    const [page, setPage] = useState(0);
    const onNext = () => {
      const min = window.innerWidth < 640 ? 1 : 3;
      if (page < p.reviews.length - min) {
        setPage(page + 1);
      }
    };
    const onPrev = () => {
      if (page > 0) {
        setPage(page - 1);
      }
    };
  
    const Chevron = (pp
        // : { dir: 'left' | 'right', onClick: () => void }
        ) => {
      const color = () => {
        const min = window.innerWidth < 640 ? 1 : 3;
        return (
          (pp.dir == 'left' && page > 0) ||
          (pp.dir == 'right' && page < p.reviews.length - min)
        ) ?
          'bg-gray-900 text-white cursor-pointer' :
          'text-gray-600 border border-gray-600 cursor-default';
      }
      return (
        <div
          class={`${color()} rounded-full p-2 w-fit transition-colors select-none`}
          onClick={pp.onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              class={pp.dir != 'left' ? 'hidden' : ''}
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
            <path
              class={pp.dir != 'right' ? 'hidden' : ''}
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      )
    };
    return (
      <div class="flex justify-center items-center">
        <Chevron dir="left" onClick={onPrev} />
  
        <div class="flex relative  overflow-hidden">
            {p.reviews.map((review)=>(<div
                class="w-full sm:w-1/3 px-2 lg:px-4 shrink-0 transition-transform duration-150"
                style={{
                  transform: `translateX(calc(-100% * ${page}))`,
                }}
              >
                <Review {...review} />
              </div>))}
          {/* <For each={p.reviews}>
            {(review) => (
              <div
                class="w-full sm:w-1/3 px-2 lg:px-4 shrink-0 transition-transform duration-150"
                style={{
                  transform: `translateX(calc(-100% * ${page()}))`,
                }}
              >
                <Review {...review} />
              </div>
            )}
          </For> */}
        </div>
  
        <Chevron dir="right" onClick={onNext} />
      </div>
    );
  }

  export default ReviewList;