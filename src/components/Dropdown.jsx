import { useState } from "react";

const Dropdown = (props) => {

    const { text, items, onSelect } = props;

    // const outsideClick = clickOutside;
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const onButtonClick = () => {
        setIsOpen(!isOpen);
        setSelected(null);
    };

    const onItemSelect = (item) => {
        onSelect?.(item.value);
        setIsOpen(false);
        setSelected(item.text);
    };
    return (
        // <div
        //     // use: outsideClick={() => setIsOpen(false)}
        //     class="flex flex-col flex-1 items-center gap-2 relative w-full"
        // >
            <div class="dropdown inline-block relative w-full min-w-100">

                <button
                    class="bg-white p-4 pr-8 w-full rounded-[50px] md:rounded-xl font-semibold relative text-[0.7rem] sm:text-sm h-12 md:h-20"
                    onClick={onButtonClick}
                >
                    
                    {selected ? selected : text}
                    <svg
                        class="inline-block pr-2 w-6 h-6 absolute right-0 top-[50%] transform translate-y-[-50%]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {/* {
                selected ? <div class="text-center p-1 bg-sun-300 w-full cursor-pointer" onClick={onButtonClick}>
                    {selected}
                </div> : null} */}

                {isOpen ?
                    <ul class="list-none px-4 absolute mr-4 pt-1 z-[100]">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                // className="text-center p-1 bg-sun-200 hover:bg-sun-300 cursor-pointer "
                                className="bg-white border border-sun-300 font-bold py-2 px-4 block whitespace-no-wrap cursor-pointer text-[0.5rem] sm:text-sm hover:bg-sun-300"
                                onClick={() => onItemSelect(item)}
                            >
                                {item.text}
                            </li>
                        ))}
                    </ul> : null
                }
            </div>

            );
}

            export default Dropdown;