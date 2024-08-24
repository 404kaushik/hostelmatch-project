import { useEffect, useRef, useState } from "react";
import React from "react";
const ShowMore = (p) => {
    const [clamp, setClamp] = useState(p.clamp);
    //   const c = children(() => p.children);
    // console.log("showmore,",p.children.props.innerHTML)

    let c = p.children?.props?.innerHTML;

    if(!c){
        c = p.children;
    }
    let  lines = c;
    if (typeof lines === "string") {
        lines = lines.split('\n');
    }


    const onShowMore = (e) => {
        e.preventDefault();
        setClamp(clamp === p.clamp ? 100 : p.clamp);
    };
    let div = useRef(null);
    let showMore;

    useEffect(() => {
        const rem = parseInt(getComputedStyle(div.current).fontSize);
        const height = div.clientHeight;
        if (p.clamp * rem * 1.5 == height) {
            showMore.style.display = 'block';
        }
    }, [p.clamp]);

    return (
        <div>
            <div
                class=""
                ref={div}
                style={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitLineClamp: clamp, // Use WebkitLineClamp instead of -webkit-line-clamp
                    WebkitBoxOrient: 'vertical', // Use WebkitBoxOrient instead of -webkit-box-orient
                    textOverflow: 'ellipsis',
                    lineHeight: '1.5rem',
                    // '-webkit-line-clamp': clamp,
                    // '-webkit-box-orient': 'vertical',
                    // 'text-overflow': 'ellipsis',
                    // 'line-height': '1.5rem',
                }}
            >
                {/* {c} */}
                {lines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        {index < lines.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </div>
            <a
                // style={{ display: 'none' }}
                ref={showMore}
                href="#"
                onClick={onShowMore}
                class="text-sun-400 hover:underline text-sm"
            >
                <span class="inline-block">
                    {/* Show More */}
                    {clamp == p.clamp ? p.more || 'Show More' : p.less || 'Show Less'}
                </span>
                {!p.noCaret ?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="inline-block w-4 h-4 ml-1"
                    >
                        <path
                            class={clamp != p.clamp ? '' : 'hidden'}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                        <path
                            class={clamp == p.clamp ? '' : 'hidden'}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg> : null
                }
            </a>
        </div>
    );
}

export default ShowMore;