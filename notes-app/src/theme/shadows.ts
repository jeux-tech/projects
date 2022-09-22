const shadows = {
  _1: '0px -1px 0px rgba(0, 0, 0, 0.15)',
  _2: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  _3: '0px 8px 32px -10px rgba(0, 0, 0, 0.3)',
  _4: '0px 16px 44px -12px rgba(0, 0, 0, 0.4)',
};

export type Shadows = keyof typeof shadows;

export default shadows;
