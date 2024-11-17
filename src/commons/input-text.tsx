import styled from "@emotion/styled";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export const InputText = ({...props}: InputTextProps) => {
    const Input = styled.input`
    border: 1px solid #5080AC;
    border-radius: 8px;
    width: 100%;
    height: 2rem;
    padding-left: 1rem;
    `


    return <Input type="text" {...props}/>;
}