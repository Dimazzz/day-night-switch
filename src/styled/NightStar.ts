import styled, {css} from "styled-components";
import {NightStarProps} from "../models";
import {fadeIn, fadeOut} from "./animation";

export const starFadeIn = css`
  ${fadeIn};
  top: 0;
  right: 0;
`

export const starFadeOut = css`
  ${fadeOut};
  top: -100%;
  right: -50%;
`

export const NightStartWrap = styled('span')`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  ${starFadeOut};
`

export const NightStar = styled('span')<NightStarProps>`
  position: absolute;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml,<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.37013 3.68995C3.43367 4.62373 2.28437 5.12445 0.936432 5.17859C2.28437 5.24625 3.41948 5.73344 4.37013 6.66722C5.30659 7.601 5.77482 8.71071 5.77482 10.0099C5.77482 8.71071 6.24305 7.601 7.17952 6.66722C8.11598 5.73344 9.25109 5.23272 10.599 5.17859C9.25109 5.12445 8.11598 4.62373 7.17952 3.68995C6.24305 2.75617 5.77482 1.64646 5.77482 0.34729C5.77482 1.64646 5.30659 2.75617 4.37013 3.68995Z" fill="white"/></svg>');
  aspect-ratio: 1 / 1;
  width: ${({size}) => size};
  left: ${({x}) => x};
  top: ${({y}) => y};
`
