import '../styles/comment.scss';
const Comment = (props) => {
    const { accountName, comment} = props;
    return ( 
        <div className="commentContainer">
            <div className='acountName'>{accountName}</div>
            <div className='comment'>{comment}</div>
        </div>
     );
}
 
export default Comment;