import React from 'react'

const Navbar = ({ filter, uniqueCategory }) => {
    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">
                    {
                        uniqueCategory.map((currElement) => {
                            return <button className='btn-group__item'
                                onClick={() => filter(currElement)}
                            >{currElement}</button>
                        })
                    }

                    {/* <button className='btn-group__item'
                        onClick={() => filter('lunch')} >Lunch</button>
                    <button className='btn-group__item'
                        onClick={() => filter('evening')} >Evening</button>
                    <button className='btn-group__item'
                        onClick={() => filter('dinner')} >Dinner</button> */}
                    {/* <button className='btn-group__item'
                    onClick={() => setMenuData(Menu)} >All</button> */}
                </div>

            </nav>
        </>
    )
}

export default Navbar