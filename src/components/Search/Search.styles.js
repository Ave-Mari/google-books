import styled from 'styled-components';

export const Wrapper = styled.header`   
    background: no-repeat url("./src/components/Search/books-background.jpg");
    background-size: cover;
    display: flex;    
    justify-content: center;
    padding-top: 60px;
    
    h1 {
        margin-top: 0;
        color: #fff;
        display: block;
    }

    form {        
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;

        button {
            width: 20%;
        }
    }

`