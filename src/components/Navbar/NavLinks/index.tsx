import * as React from 'react';

function NavLinks() {
    const Links = [
        {
            title: 'Home',
            link: '#'
        },
        {
            title: 'About',
            link: '#'
        },
        {
            title: 'Services',
            link: '#'
        },
        {
            title: 'Portfolio',
            link: '#'
        }, {
            title: 'Blog',
            link: '#'
        },
        {
            title: 'Contact us',
            link: '#'
        },
    ]
    return (
        <div className='nav-links'>
            {Links?.map((elements , index) => {
                return (
                    <div key={index}>
                        <a href={elements.link}>{elements.title}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default NavLinks