import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<P><a>Feito com <3 por Tássio Santana</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
