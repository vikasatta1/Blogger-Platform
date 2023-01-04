import React from 'react';
type IconProps = {
    fill:string
}
const BlogsIcon = ({fill}:IconProps) => {
    return (
        <>
            <svg width="28" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7ZM3 13H5V11H3V13ZM3
                 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" fill={fill}/>
            </svg>

        </>
    );
};

export default BlogsIcon;