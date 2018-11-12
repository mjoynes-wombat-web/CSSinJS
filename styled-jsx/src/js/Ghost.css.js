import React from 'react';
import css from 'styled-jsx/css';

const duration = "9s";

const ghostAnimations = css.global`
@keyframes blink-background {
  0% {
    color: white;
    background: white;
  }
  50% {
    color: blue;
    background: blue;
  }
  100% {
    color: white;
    background: white;
  }
}

@keyframes blink-red {
  0% {
    color: crimson;
    background: crimson;
  }
  50% {
    color: peachpuff;
    background: peachpuff;
  }
  100% {
    color: crimson;
    background: crimson;
  }
}
`;

const ghostMain = css.resolve`
@keyframes move {
  0% {
    transform: translate3d(25vw, calc(45vh - 56px), 0);
  }
  10% {
    transform: translate3d(5vw, calc(45vh - 56px), 0);
  }
  20% {
    transform: translate3d(5vw, 25vh, 0);
  }
  40% {
    transform: translate3d(calc(45vw - 56px), 25vh, 0);
  }
  50% {
    transform: translate3d(calc(45vw - 56px), 5vh, 0);
  }
  70% {
    transform: translate3d(5vw, 5vh, 0);
  }
  90% {
    transform: translate3d(5vw, calc(45vh - 56px), 0);
  }
  100% {
    transform: translate3d(25vw, calc(45vh - 56px), 0);
  }
}

@keyframes blink {
  0% {
    color: white;
  }
  50% {
    color: blue;
  }
  100% {
    color: white;
  }
}

div {
  cursor: pointer;
  position: absolute;
  width: 56px;
  height: 56px;
  animation-name: move;
  animation-duration: ${duration};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  &.top-left {
    top: 0;
    left: 0;
  }
  &.top-right {
    top: 0;
    left: 50%;
  }
  &.bottom-left {
    top: 50%;
    left: 0;
  }
  &.bottom-right {
    top: 50%;
    left: 50%;
  }
  &.move-first {
    animation-delay: -(random(150) / 100) + s, 0s;
  }
  &.move-second {
    animation-delay: -(random(150) / 100 + 0.7) + s, 0s;
  }
  &.move-third {
    animation-delay: -(random(150) / 100 + 1.3) + s, 0s;
  }
  &.move-fourth {
    animation-delay: -(random(150) / 100 + 2.94) + s, 0s;
  }

  &.clicked {
    color: blue;

    &.reviving {
      animation-name: move, blink;
      animation-duration: ${duration}, 0.4s;
      animation-timing-function: linear, steps(1);
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
    }
  }
}
`;

const ghostFeet = css.resolve`
  @keyframes feet {
    0% {
      box-shadow: 4px 0, 8px 0, 12px 0, 4px 4px, 8px 4px, 20px 0, 24px 0, 28px 0, 32px 0, 24px 4px, 28px 4px, 40px 0, 44px 0, 48px 0, 52px 0, 44px 4px, 48px 4px;
    }
    50% {
      box-shadow: 0 4px, 4px 0, 12px 0, 16px 0, 20px 0, 16px 4px, 20px 4px, 32px 0, 36px 0, 40px 0, 32px 4px, 36px 4px, 48px 0, 52px 0, 52px 4px;
    }
    100% {
      box-shadow: 4px 0, 8px 0, 12px 0, 4px 4px, 8px 4px, 20px 0, 24px 0, 28px 0, 32px 0, 24px 4px, 28px 4px, 40px 0, 44px 0, 48px 0, 52px 0, 44px 4px, 48px 4px;
    }
  }

  div {
    animation-name: feet;
    animation-duration: .4s;
    animation-fill-mode: forwards;
    animation-timing-function: steps(1);
    animation-iteration-count: infinite;
    content: '';
    display: block;
    position: absolute;
    top: 48px;
    left: 0;
    width: 4px;
    height: 4px;
    z-index: 1;
    /* color: inherit; */
  }

  :global(.ghost.clicked.${ghostMain.className}) {
    div {
      background: blue;
    }
  }

  :global(.ghost.clicked.reviving.${ghostMain.className}) {
    div {
      animation-name: ${"blink-background"}, feet;
      animation-duration: 0.4s, 0.4s;
      animation-timing-function: steps(1), steps(1);
    }
  }
`;

const ghostMouth = css.resolve`
  div {
    content: '';
    display: none;
    position: absolute;
    left: 4px;
    top: 40px;
    width: 4px;
    height: 4px;
    z-index: 2;
    color: peachpuff;
    background-color: peachpuff;
    box-shadow: 4px -4px, 8px -4px, 12px 0, 16px 0, 20px -4px, 24px -4px, 28px 0, 32px 0, 36px -4px, 40px -4px, 44px 0;
  }

  :global(.ghost.clicked.${ghostMain.className}) {
    div {
      display: block
    }
  }
  :global(.ghost.clicked.reviving.${ghostMain.className}) {
    div {
      animation-name: ${"blink-red"};
      animation-duration: 0.4s;
      animation-timing-function: steps(1);
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
    }
  }
`;

const ghostBody = css.resolve`
  div {
    fill: currentColor;
  }
`;

const ghostEye = css.resolve`
  @keyframes eyes {
    0% {
      top: 4px;
    }
    10% {
      top: 16px;
    }
    50% {
      top: 4px;
    }
    70% {
      top: 16px;
    }
    100% {
      top: 4px;
    }
  }

  @keyframes eyesballs {
    0% {
      top: 0;
      left: 4px;
    }
    10% {
      top: 8px;
      left: 0;
    }
    20% {
      left: 4px;
      top: 12px;
    }
    40% {
      top: 8px;
      left: 0;
    }
    50% {
      top: 0;
      left: 4px;
    }
    70% {
      top: 8px;
      left: 8px;
    }
    90% {
      left: 4px;
      top: 12px;
    }
    100% {
      top: 0;
      left: 4px;
    }
  }

  div {
    fill: #fff;
    position: absolute;
    top: 16px;
    width: 16px;
    height: 20px;
    animation-name: eyes;
    animation-duration: ${duration};
    animation-fill-mode: forwards;
    animation-timing-function: steps(1);
    animation-iteration-count: infinite;
    &:after {
      background: blue;
      content: '';
      display: block;
      position: absolute;
      top: 8px;
      left: 0;
      width: 8px;
      height: 8px;
      animation-name: eyesballs;
      animation-duration: ${duration};
      animation-fill-mode: forwards;
      animation-timing-function: steps(1);
      animation-iteration-count: infinite;
    }
  }

  div.left {
    @extend %ghost__eye;
    left: 8px;
  }

  div.right {
    @extend %ghost__eye;
    right: 8px;
  }

  :global(.ghost.clicked.${ghostMain.className}) {
    %ghost__eye {
      animation: none;
      top: 12px;
      fill: transparent;
        &:after {
        animation: none;
        top: 6px;
        width: 8px;
        height: 8px;
        background: peachpuff;
      }
    }
  }

  :global(.ghost.clicked.reviving.${ghostMain.className}) {
    %ghost__eye {
      &:after {
        animation-name: ${"blink-red"};
        animation-duration: 0.4s;
        animation-timing-function: steps(1);
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
      }
    }
  }

  div.left:after {
    left: 6px;
  }
  div.right:after {
    left: 1px;
  }
`;

export { ghostMain, ghostFeet, ghostMouth, ghostBody, ghostEye, ghostAnimations};