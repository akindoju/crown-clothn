import styled from 'styled-components';

export const ShopPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    overflow: hidden;
    display: block;
    width: unset;
    align-items: center;
    justify-content: unset;

    > *:first-child {
      margin-bottom: 50px;
    }
`;
