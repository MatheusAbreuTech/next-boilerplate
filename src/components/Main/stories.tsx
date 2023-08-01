import Main from '.';

type argsType = {
  title: string;
  description: string;
};

export default {
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
};

export const Basic = (args: argsType) => <Main {...args} />;
