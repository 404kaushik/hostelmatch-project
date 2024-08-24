const Ratings=(p)=> {


    const formatValue = (value) =>
      {
        if (!value){
          return "-";
        }
        return (value * 10).toFixed(0) + '%';}
    const deg = () => 270 - (360 - (p.overall / 10 * 360));
  
    const overall = formatValue((parseFloat(p.Atmosphere)+parseFloat(p.Cleanliness)+parseFloat(p.Location)+parseFloat(p.Staff)+parseFloat(p.Security)+parseFloat(p.Facilities)+parseFloat(p["Value for Money"]))/7)
    return (
      <div class="flex flex-col gap-6 bg-sun-300 p-6 items-center sm:rounded-xl sm:flex-row sm:w-fit">
        <div
          class="relative text-center w-[9.5rem] h-[9.5rem] rounded-full bg-sun-200"
          style={{
            'background-image': `linear-gradient(${deg()}deg, transparent 50%, #000000 50%), linear-gradient(270deg, #000000 50%, transparent 50%)`
          }}>
          <div class="w-36 h-36 bg-sun-200 relative rounded-full top-1 left-1 flex flex-col justify-center">
            <span> Overall </span>
            <div class="font-semibold text-3xl">
              &nbsp;{overall}
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-8">
          <div class="flex">
            <span class="font-semibold pr-2">{formatValue(p.Atmosphere)}</span>
            <span> Vibe </span>
          </div>
          <div class="flex">
            <span class="font-semibold pr-2">{formatValue(p.Cleanliness)}</span>
            <span> Cleanliness </span>
          </div>
          <div class="flex">
            <span class="font-semibold pr-2">{formatValue(p.Location)}</span>
            <span> Location </span>
          </div>
          <div class="flex">
            <span class="font-semibold pr-2">{formatValue(p.Staff)}</span>
            <span> Staff </span>
          </div>
          <div>
            <span class="font-semibold pr-2">{formatValue(p.Security)}</span>
            <span> Safety </span>
          </div>
          <div class="flex">
            <span class="font-semibold pr-2">{formatValue(p.Facilities)}</span>
            <span> Facility </span>
          </div>
          <div class="flex">
            <span class="font-semibold pr-2">{formatValue(p["Value for Money"])}</span>
            <span class="whitespace-nowrap"> Value for Money </span>
          </div>
          {/*
          <div class="flex">
            <span class="font-semibold pr-2">{formatValue(p.factor_1)}</span>
            <span> Factor 1 </span>
          </div>
          */}
        </div>
      </div>
    );
  }
  
  export default Ratings;