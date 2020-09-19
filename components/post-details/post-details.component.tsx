import React from 'react';

import { CardContainer } from './post-details.styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PostDetails: React.FC<PostProps> = ({ post }) => (
    <CardContainer>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {post.title}
            </Typography>
            <Typography variant="subtitle1" component="p">
                {post.body}
            </Typography>

            {post.comments.length !== 0 ? (
                <CardContent>
                    <Typography variant="h6" component="h6">
                        Comments
                    </Typography>
                    {post.comments.map((comment) => (
                        <Typography variant="subtitle1" component="p" key={comment.id}>
                            {comment.body}
                        </Typography>
                    ))}
                </CardContent>
            ) : null}
        </CardContent>
    </CardContainer>
);

export default PostDetails;
