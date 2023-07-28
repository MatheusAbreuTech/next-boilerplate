import type { Meta, Story } from '@storybook/nextjs';
import Main from '.';

const meta: Meta = {
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
};

export default meta;

export const Basic: Story = (args) => <Main {...args} />;
