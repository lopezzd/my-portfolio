import { Container } from "../Button/style";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      <span>{label}</span>
    </Container>
  );
}
