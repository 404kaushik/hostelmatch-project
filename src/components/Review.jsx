import FiveStar from "./FiveStar"
import ShowMore from "./ShowMore";

const Review =(p
//     : {
//   name: string,
//   gender: string,
//   age: number,
//   score: number,
//   date: string,
//   location: string,
//   content: string,
// }
) => {
  // console.log("review",p)
  return (
    <div class="flex flex-col bg-bianca-50 px-4 py-6 rounded-xl h-full sm:max-w-sm text-gray-800">
      <div class="text-ellipsis overflow-y-auto">
        <ShowMore
          more="…"
          less="…"
          noCaret
          clamp={8}
        >
          {p.content}
        </ShowMore>
      </div>
      <div class="pt-2 pb-1 mt-auto">
        <FiveStar score={p.score} />
      </div>
      <div class="flex font-medium">
        {p.gender}, {p.age}
      </div>
      <div class="text-sm text-gray-600">
        {p.location}
      </div>
    </div>
  );
}
export default Review;