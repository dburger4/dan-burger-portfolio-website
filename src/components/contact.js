import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Icon from './icon';
import Icon2 from './icon';
import { mq } from './_shared/media';
import { StyledH1 } from './_shared/styled-headings';
import { StyledSection } from './_shared/styled-section';

const StyledContactSection = styled(StyledSection)`
  margin-bottom: 70px;
`;
const StyledContainer = styled.section`
  display: flex;
  align-items: center;

  & > svg {
    font-size: 2rem;
    margin-right: 0.75rem;
  }
`;
const StyledFormContainer = styled.section`
  & > span {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
const StyledForm = styled.div`
  color: var(--primary-color);

  font-weight: normal;
`;
const StyledTextSection = styled.section`
  white-space: pre-line;
  width: 100%;
  max-width: 500px;
  margin-left: 3px;
`;
const StyledSeparator = styled.div`
  height: 1px;
  width: 50%;
  background-color: var(--body-color);
`;
const StyledContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;
  margin-top: 2rem;

  ${mq.gt.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.gt.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Contact = ({ data }) => {
  const {
    frontmatter: { linkedin, email, address },
    html,
  } = data;

  return (
    <React.Fragment>
      <StyledContactSection id="contact">
        <StyledH1>Contact Me</StyledH1>
        <StyledTextSection dangerouslySetInnerHTML={{ __html: html }} />
        <StyledSeparator />
        <StyledContacts>
        {/* {linkedin && (
            <Link to="https://www.linkedin.com/in/danrburger/" target="_blank">
              <StyledContainer>
                <Icon2 icon="linkedin-in" />
                <StyledFormContainer>
                  <StyledForm>My LinkedIn</StyledForm>
                  <span>{linkedin}</span>
                </StyledFormContainer>
              </StyledContainer>
            </Link>
            
        )} */}
        {email && (
            <StyledContainer>
              <Icon icon="paper-plane" />
              <StyledFormContainer>
                <StyledForm>My E-Mail</StyledForm>
                <span>{email}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {address && (
            <StyledContainer>
              <Icon icon="home" />
              <StyledFormContainer>
                <StyledForm>My City</StyledForm>
                <span>{address}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
        </StyledContacts>
      </StyledContactSection>
    </React.Fragment>
  );
};

export default Contact;
