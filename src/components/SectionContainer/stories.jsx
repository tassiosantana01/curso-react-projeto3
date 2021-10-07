import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolor
          repellat commodi ipsum officiis iste officia vel excepturi molestiae.
          Eos quisquam labore ex corrupti commodi iusto quae dolor minus
          distinctio!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
