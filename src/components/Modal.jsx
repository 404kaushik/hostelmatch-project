

const Modal = (p) => {
    // const outsideClick = clickOutside;
    const c = p.children;
    // const c = children(() => p.children);

    return (
        <div>
            {p.isOpen ? <div
                class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-white"
            >
                <div
                    class="sm:max-w-6xl sm:mx-auto"
                    use: outsideClick={() => p.setIsOpen(false)}
                >
                    {c()}
                </div>
                <div
                    class="fixed top-4 right-4 text-sun-50 bg-sun-400 font-medium px-2 py-1 rounded-md cursor-pointer"
                >
                    X
                </div>
            </div> : null}

        </div>
    );
}

export default Modal;

