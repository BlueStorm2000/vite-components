import React from 'react';
import Text from "../../components/text";
import {buttonLayouts} from "./interfaces/_contants";
import styled from "styled-components";

const SubTitle = () => {
  return (
    <StyledSubTitle>
      <Text as={'p'}>Commonly used operating buttons, button combinations, button layouts.</Text>
      <ul className={'subtitle-ul'}>
        {buttonLayouts.map(item => (
          <li key={item?.id}
              className={'subtitle-li'}
          >
            <Text as={'code'}>{`<${item?.name}>`}</Text>
            <Text>{item?.content}</Text>
          </li>
        ))}
      </ul>
    </StyledSubTitle>
  )
}

export default SubTitle

export const StyledSubTitle = styled.div`
  .subtitle {
    &-ul {
      list-style-type: circle;
    }
    &-li {
      margin: 8px 0;
      display: flex;
    }
  }
`
