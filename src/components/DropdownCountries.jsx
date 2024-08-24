import { useState } from "react";

const DropdownCountries = (props) => {

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
        <div
            // use: outsideClick={() => setIsOpen(false)}
            class="flex flex-col flex-1 items-center gap-2"
        >
            <button
                class="bg-sun-300 p-4 pr-8 w-full rounded-xl font-semibold relative"
                onClick={onButtonClick}
            >
                {text}
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
            {
                selected ? <div class="text-center p-1 bg-sun-300 w-full cursor-pointer" onClick={onButtonClick}>
                    {selected}
                </div> : null}

            {isOpen ?
                <ul class="list-none w-full  ">
                    <div class="font-semibold bg-sun-300 text-left pl-4">Canada</div>
                    {items.Canada.map((item, index) => (

                        <li
                            key={index}
                            className="text-center p-1 bg-sun-200 hover:bg-sun-300 cursor-pointer"
                            onClick={() => onItemSelect(item)}
                        >
                            {item.text}
                        </li>
                    ))}
                    <div class="font-semibold bg-sun-300 text-left pl-4">USA</div>
                    {items.USA.map((item, index) => (

                        <li
                            key={index}
                            className="text-center p-1 bg-sun-200 hover:bg-sun-300 cursor-pointer"
                            onClick={() => onItemSelect(item)}
                        >
                            {item.text}
                        </li>
                    ))}
                    <div class="font-semibold bg-sun-300 text-left pl-4">Mexico</div>
                    {items.Mexico.map((item, index) => (

                        <li
                            key={index}
                            className="text-center p-1 bg-sun-200 hover:bg-sun-300 cursor-pointer"
                            onClick={() => onItemSelect(item)}
                        >
                            {item.text}
                        </li>
                    ))}
                    <div class="font-semibold bg-sun-300 text-left pl-4">Spain</div>
                    {items.Spain.map((item, index) => (

                        <li
                            key={index}
                            className="text-center p-1 bg-sun-200 hover:bg-sun-300 cursor-pointer"
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

export default DropdownCountries;