import React from 'react';
import {Link} from 'react-router-dom';
import './list.styl';

const ListItem = (props) => {
    return props.stories.map((story) => {
        return (
            <li className="list-item" key={story.id}>
                <Link to={`/news/${story.id}`} className="story-title">
                    {story.title}
                </Link>
                {story.images &&
                <div className="story-thum">
                    <img src={story.images[0]} alt="thum"/>
                </div>
                }
            </li>
        )
    })
};

const List = (props) => {
    const {stories, date} = props;
    return (
        <div className="list">
            <h1 className='list-title'>{date}</h1>
            <ul className="list-block">
                <ListItem stories={stories}/>
            </ul>
        </div>

    )
};

export default List;