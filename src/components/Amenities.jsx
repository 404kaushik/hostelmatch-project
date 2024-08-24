

const Amenities = (p) => {
    const Section = (p) => (
        <div class="flex  flex-col gap-2">
            <div class="font-semibold text-sun-400">{p.title}</div>
            <ul class="list-none w-fit">
                {/* <ul class="sm:flex sm:flex-wrap sm:gap-4"> */}
                {p.items.map((item, index) => (

                    <li class="flex gap-1 items-center" >
                        {/* <li class="sm:w-1/2 lg:w-1/3 xl:w-1/4" > */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-[1rem] h-[1rem] block"
                        >
                            <path class={p.icon != 'check' ? 'hidden' : ''} stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            <path class={p.icon != 'x-mark' ? 'hidden' : ''} stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span class={p.icon == 'check' ? 'whitespace-nowrap' : ''}>
                            {item}
                        </span>
                    </li>
                ))
                }

            </ul>
        </div>
    );
    // FIXME: Show a dash for empty lists
    // FIXME: Show all amenities and build a horizontal widget for it
    return (
        <div>
            <div class="text-2xl font-semibold mb-4 text-center sm:text-left">Amenities</div>
            <div class="flex gap-6 sm:gap-10 sm:flex-row flex-col">
                {
                    // Object.keys(p).slice(0, 3).map((key) => (
                    //     <Section title={key} items={p[key]} icon="check" />

                    // ))
                    Object.keys(p)
                        .sort((a, b) => p[b].length - p[a].length) // Sort keys based on the length of their corresponding arrays
                        .slice(0, 3)
                        .map((key) => (
                            <Section title={key} items={p[key]} icon="check" />
                        ))
                }
                {/* <Section title="Included" items={p["Free"]} icon="check" />
                <Section title="Not Offered" items={p["Free"]} icon="x-mark" /> */}
            </div>
        </div>
    );
}

export default Amenities;