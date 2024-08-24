import UseAnalyticsEventTracker from "../services/Analytics";
const BookHostel = (p) => {
  console.log("book hostel")
  console.log(p)
  const onClick = (e) => {
    if (e.target.tagName === 'A') {
      UseAnalyticsEventTracker({ "category": "Hostels Details Page", "action": "HostelDetail URL Button Click", "label": p.name })
      return;
    }

  }
  return (
    <div class="flex flex-col gap-8 bg-sun-100 p-4 sm:max-w-sm sm:rounded-xl" onClick={onClick}>
      <div class="font-semibold text-xl text-center">Book Hostel</div>

      <div class="flex flex-col gap-2 mt-auto items-center">
        <a
          href={p.urls?.hw_url}
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold block border border-black py-1  text-center w-64 rounded-xl bg-sun-300"
        > Hostelworld </a>
        <a
          href={p.urls?.booking_url}
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold block border border-black py-1 text-center w-64 rounded-xl bg-sun-300"
        > Booking.com </a>
      </div>
      <div class="flex flex row">
        <div class="border-2 border-sun-300 p-2  w-full">
          <p class="font-bold">Dorms</p>
          <p class="font-bold text-sun-500">C${p.pricing.lowestAveragePricePerNight ? p.pricing.lowestAveragePricePerNight : "  -"}</p>
        </div>
        <div class="border-2 border-sun-300  p-2 w-full">
          <p class="font-bold">Privates</p>
          <p class="font-bold text-sun-500">C${p.pricing.lowestAveragePrivatePricePerNight ? p.pricing.lowestAveragePrivatePricePerNight : "  -"}</p>
        </div>
      </div>
    </div>

  );
}

export default BookHostel;