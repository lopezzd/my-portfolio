import styled from "styled-components";

export const Container = styled.footer`
  padding-block: 8px;
  border-top: 0.5px solid #e7e5e4;
  background-color: rgba(#010101, 0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

export const ContainerWrapper = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const RedLabel = styled.span`
  font-weight: 700;
  color: #f87171;
`;

export const PurpleLabel = styled.a`
  font-weight: 700;
  color: #a855f7;
`;

export const FooterContainer = styled.footer`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid var(--border);
  background-color: rgba(var(--background), 0.95);
  backdrop-filter: blur(8px);

  @supports (backdrop-filter: blur(8px)) {
    background-color: rgba(var(--background), 0.6);
  }
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1400px) {
    border-left: 1px dashed var(--border);
    border-right: 1px dashed var(--border);
  }

  @media (min-width: 1800px) {
    max-width: 1536px;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  gap: 0.5rem;
`;

export const Description = styled.div`
  max-width: 48rem;
  font-size: 0.75rem;
  line-height: 1.625;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }

  span {
    display: block;

    @media (min-width: 640px) {
      display: inline;
    }

    &:not(:last-child)::after {
      content: " ";
    }
  }

  .highlight {
    font-weight: 500;
  }
`;

export const Credits = styled.div`
  font-size: 0.75rem;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }

  a {
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #ca66f9;
    }
  }
`;
