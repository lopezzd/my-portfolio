import {
  FooterContainer,
  Wrapper,
  Content,
  Description,
  Credits,
  PurpleLabel,
  RedLabel,
} from "../Footer/style";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Wrapper>
        <Content>
          <Description>
            <span>© {currentYear}</span>
            <span> · </span>
            <span>
              Construído com <RedLabel>React.js</RedLabel> e{" "}
              <RedLabel>Styled Components</RedLabel>
            </span>
          </Description>

          <Credits>
            Desenvolvido por{" "}
            <PurpleLabel href={``} target="_blank" rel="noreferrer">
              João Henrique Lopes
            </PurpleLabel>
          </Credits>
        </Content>
      </Wrapper>
    </FooterContainer>
  );
}
