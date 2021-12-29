import '../styles/card.scss';
import Profile from './Profile';
import { ReactComponent as CardButton} from '../images/dots.svg';
import CardMenu from './CardMenu';
import Comment from './Comment';
import { Profiler } from 'react';

const Card = (props) => {
    const {
        storyBorder,
        image,
        comments,
        likeByText,
        likeByNumber,
        hours,
    } = props;
    return ( 
        <div className="card">
            <header>
                <Profile 
                iconSize='medium'
                storyBorder={storyBorder}
                />
               <CardButton 
               className='cardButton'/>
            </header>
                <img className='cardImage'
                src='image'
                alt='card content'
            />
            <CardMenu />
            <div className='likedBy'>
            <Profile 
            iconSize='small'
            hideAccountName={true}
            />
            <span>
                Liked by <strong>{likedByText}</strong> and{' '} 
                <strong>{likedByNumber} others</strong>
            </span>
            </div>
            <div className='comments'>
                {comments.map(comments =>{
                    return(
                        <Comment key={comments.id}
                        accountName={comments.user}
                        comment={comment.text} 
                        />
                    );
                })}
            </div>
        </div>
     );
}
 
export default Card;