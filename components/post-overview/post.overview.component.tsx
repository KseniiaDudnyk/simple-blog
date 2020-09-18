import React from 'react';

import { PostCardContainer } from './post.overview.styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type PostProps = {
    post: Post;
};

const PostOverview: React.FC<PostProps> = ({ post }) => (
    <PostCardContainer>
        <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                    {post.body}
                </Typography>
            </CardContent>
        </CardActionArea>
    </PostCardContainer>
);

export default PostOverview;
