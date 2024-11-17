import styled from "@emotion/styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export const PrimaryButton = ({text, ...props}: ButtonProps) => {
    const Button = styled.button`
        background: #507fab;
        padding: 0.75rem 1.5rem;
        color: white;
        border-radius: 6px;
        cursor: pointer;
    `

    return <Button {...props}>{text}</Button>;
}