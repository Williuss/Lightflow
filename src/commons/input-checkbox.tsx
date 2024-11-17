import styled from "@emotion/styled";

interface InputCBProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string
}

export const InputCheckbox = ({text, ...props}: InputCBProps) => {
    const Input = styled.input`
    border: 1px solid #5080AC;
    border-radius: 8px;
    padding-left: 1rem;
    `

    const Text = styled.p`
        font-size: 0.75rem !important;
        white-space: nowrap;
        width: 100%:
    `

    const Wrapper = styled.div`
        display: flex;
        width: 100%;
        // justify-content: space-between;
    `

    return (
        <Wrapper>
            <Input type="checkbox" {...props}/>
            <Text>{text}</Text>
        </Wrapper>
        );
}