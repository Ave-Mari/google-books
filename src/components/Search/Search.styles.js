import styled from 'styled-components';

export const Wrapper = styled.header`   
    background: no-repeat url("./src/components/Search/books-background.jpg");
    background-size: cover;
    display: flex;    
    justify-content: center;
    padding: 30px 0;
    
    h1 {
        margin-top: 0;
        color: #fff;
        display: block;
        user-select: none;
    }

    form {        
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;        
        align-items: center;

        button {
            width: 20%;
            color: #fff;
            background: #ab1a1a;
            padding: 13px 5px;
            border: none;
            cursor: pointer;

            &:hover {
                background: #dc9918;
            }
        }

        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 12px;
        }

        label {
            color: #fff;
        }

        select {
            margin-left: 8px;
        }

        .input-select-block {
            margin-bottom: 18px;
            width: 87%;
            display: flex;
            justify-content: space-between;
        }
    }

`