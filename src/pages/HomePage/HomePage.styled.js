import styled from '@emotion/styled';
import { NavLink as BaseNavLink } from 'react-router-dom';
import start1xDesktop from '../../img/start-desc@1x.jpg';
import start2xDesktop from '../../img/start-desc@2x.jpg';
import start1xTablet from '../../img/start-tabl@1x.jpg';
import start2xTablet from '../../img/start-tabl@2x.jpg';
import start1xMobile from '../../img/start-mob@1x.jpg';
import start2xMobile from '../../img/start-mob@2x.jpg';

// Оголошення стилів компонента

export const HomePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: 'Manrope', sans-serif;

  @media (max-width: 767px) {
    background-image: url(${start1xMobile});
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${start1xMobile}) 1x,
        url(${start2xMobile}) 2x
      );
    }

    & section:first-of-type {
      width: 335px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    }

    & div:first-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    }
    & h2 {
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 28px;
      line-height: 1.14;
      letter-spacing: -0.02em;
      color: #fafafa;
      padding-bottom: 14px;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    & p {
      font-family: 'Manrope', sans-serif;
      padding-left: 18px;
      padding-right: 18px;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      flex-wrap: wrap;
      margin-block-end: 0;
      margin-block-start: 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.02em;
      color: #fafafa;
    }

    & div:last-of-type {
      display: flex;
      padding-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 14px;
    }

    & section:last-of-type {
      max-width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${start1xTablet});
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${start1xTablet}) 1x,
        url(${start2xTablet}) 2x
      );
    }
    & section:first-of-type {
      width: 470px;
      margin: 39.06vh 30.47vw 39.06vh 8.33vw;
      font-family: 'Manrope', sans-serif;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: column;
    }

    & div:first-of-type {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: flex-start;
      height: 130px;
    }
    & h2 {
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 40px;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: #fafafa;
      padding-bottom: 14px;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    & p {
      display: flex;
      flex-wrap: wrap;
      margin-block-end: 0;
      margin-block-start: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: -0.02em;
      color: #fafafa;
    }

    & div:last-of-type {
      display: flex;
      padding-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 14px;
    }

    & section:last-of-type {
      max-width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${start1xDesktop});
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${start1xDesktop}) 1x,
        url(${start2xDesktop}) 2x
      );
    }

    & section:first-of-type {
      width: 485px;
      margin: 35.45vh 10.417vw 35.45vh 6.944vw;
      font-family: 'Manrope', sans-serif;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: column;
    }

    & div:first-of-type {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;
      height: 130px;
    }

    & h2 {
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 40px;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: #fafafa;
      padding-bottom: 14px;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    & p {
      display: flex;
      flex-wrap: wrap;
      margin-block-end: 0;
      margin-block-start: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: -0.02em;
      color: #fafafa;
    }

    & div:last-of-type {
      display: flex;
      padding-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 14px;
    }

    & section:last-of-type {
      max-width: 100%;
      height: 100%;
    }
  }
`;

export const NavLink = styled(BaseNavLink)`
  border-radius: 42px;
  border: 1px solid #f3f3f3;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Manrope', sans-serif;

  &:first-of-type {
    background: #f3f3f3;
    color: #161f37;

    &:active,
    &:hover,
    &:focus {
      background: transparent;
      color: #f3f3f3;
    }
  }
  &:last-of-type {
    background: transparent;
    color: #f3f3f3;

    &:active,
    &:hover,
    &:focus {
      background: #f3f3f3;
      color: #161f37;
    }
  }

  @media (max-width: 767px) {
    width: 129px;
    height: 46px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 16px;
    width: 144px;
    height: 54px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    width: 144px;
    height: 54px;
  }
`;
