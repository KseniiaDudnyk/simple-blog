import React from 'react';
import Link from 'next/link';

import { PostCardContainer, DetailButton } from './post-overview.styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const PostOverview: React.FC<PostProps> = ({ post }) => (
    <PostCardContainer>
        <Link href={`/posts/${post.id}`}>
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
        </Link>
        <CardActions>
            <Link href={`/posts/${post.id}`}>
                <DetailButton>
                    <Button variant="outlined" size="small" color="inherit">
                        Read More
                    </Button>
                </DetailButton>
            </Link>
        </CardActions>
    </PostCardContainer>
);

export default PostOverview;
