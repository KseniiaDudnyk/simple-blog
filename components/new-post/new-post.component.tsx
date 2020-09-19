import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Form, InputField, SubmitButton } from './new-post.styles';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

type NewPostProps = {
    onSubmit: (title: string, body: string) => void;
};

const NewPost: React.FC<NewPostProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();

    const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeBody: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setBody(event.target.value);
    };

    const handleSubmit: React.FormEventHandler = (event) => {
        event.preventDefault();

        if (title && body) {
            onSubmit(title, body);
            router.push('/');
        } else {
            enqueueSnackbar('Please, fill Title and Body fields', { variant: 'error' });
        }
    };

    return (
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <InputField
                id="outlined-basic1"
                variant="outlined"
                label="Title"
                onChange={handleChangeTitle}
                value={title}
            />
            <InputField
                id="outlined-basic1"
                variant="outlined"
                label="Body"
                multiline={true}
                rows={10}
                onChange={handleChangeBody}
                value={body}
            />
            <SubmitButton>
                <Button type="submit" variant="outlined" size="small" color="inherit">
                    Submit
                </Button>
            </SubmitButton>
        </Form>
    );
};
export default NewPost;
