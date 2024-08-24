
const FiveStar=(p
//     : {
//   score: number,
// }
) =>{

  // console.log("fiveStar",p)
  const background = (index) => {
    const sun_300 = `#fec446`;
    if ((index + 1) * 2 <= p.score) {
      return sun_300;
    }
    const percent = (p.score - index * 2) * 50;
    if (percent > 0) {
      return `linear-gradient(to right, ${sun_300} ${percent}%, transparent ${percent}%)`
    }
    return 'transparent';
  };

  const mask = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJ3LTYgaC02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMS40OCAzLjQ5OWEuNTYyLjU2MiAwIDAxMS4wNCAwbDIuMTI1IDUuMTExYS41NjMuNTYzIDAgMDAuNDc1LjM0NWw1LjUxOC40NDJjLjQ5OS4wNC43MDEuNjYzLjMyMS45ODhsLTQuMjA0IDMuNjAyYS41NjMuNTYzIDAgMDAtLjE4Mi41NTdsMS4yODUgNS4zODVhLjU2Mi41NjIgMCAwMS0uODQuNjFsLTQuNzI1LTIuODg1YS41NjMuNTYzIDAgMDAtLjU4NiAwTDYuOTgyIDIwLjU0YS41NjIuNTYyIDAgMDEtLjg0LS42MWwxLjI4NS01LjM4NmEuNTYyLjU2MiAwIDAwLS4xODItLjU1N2wtNC4yMDQtMy42MDJhLjU2My41NjMgMCAwMS4zMjEtLjk4OGw1LjUxOC0uNDQyYS41NjMuNTYzIDAgMDAuNDc1LS4zNDVMMTEuNDggMy41eiIgLz4KPC9zdmc+Cg==")`;
  return (
    <div
      class="flex w-fit"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="w-6 h-6"
          style={{
            background: background(index),
            WebkitMaskImage: mask, // Use WebkitMaskImage instead of -webkit-mask-image
          }}
        >
          <svg
            className="stroke-sun-300 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      ))}
             {/* <For each={Array.from({ length: 5 })}>
        {(_, index) =>
          <div
            class="w-6 h-6"
            style={{
              background: background(index()),
              '-webkit-mask-image': mask,
            }}
          >
            <svg
              class="stroke-sun-300 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
        }
      </For> */}
    </div>
  );
}

export default FiveStar;