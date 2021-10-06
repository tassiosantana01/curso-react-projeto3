import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Dolor ipsum esse unde
    atque ipsa accusamus, nostrum debitis
    perspiciatis recusandae error repellat
    alias odit ratione dolorum cupiditate,
    vitae, commodi corporis dolores?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
