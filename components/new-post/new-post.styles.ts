import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const InputField = styled(TextField)`
    &.MuiTextField-root {
        width: 80%;
        background-color: white;
        margin: 1%;
    }
`;

export const SubmitButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
