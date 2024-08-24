import { AddYourListingFrame } from "./Iframes";
import AddYourListingImage from '../assets/add-your-listing.jpeg';

const AddYourListing = () => {
  return (
    <div>
      <div class="relative">
        <img src={AddYourListingImage} class="w-full" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-sun-50 text-xl sm:text-4xl md:text-6xl">
            ADD YOUR LISTING
          </div>
        </div>
      </div>
      <AddYourListingFrame />
    </div>
  );
};

export default AddYourListing;
