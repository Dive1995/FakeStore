import React from 'react'

function Categories({category,handleCategories,activeTab}) {
    return (
        <div className="category title"> 
            <a onClick={() => handleCategories(category)}>{category}</a>
            <div className={activeTab === category ? 'title-underline' : ''}></div>
        </div>
    )
}

export default Categories
