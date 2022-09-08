import AntButton from './AntButton'

export default {
  title: 'Component/AntButton',
  component: AntButton,
  argTypes: {
    text: { defaultValue: 'button!!!', control: 'text' },
    size: { defaultValue: 100, control: { type: 'range', min: 80, max: 300 } },
    className: { control: 'className' },
    color: { defaultValue: '#F6B036', control: 'color' },
    txtColor: {defaultValue: '#000', control: 'color' },
    brColor: {defaultValue: '#fff', control: 'color' },
    brWidth: {defaultValue: 1, control: 'number' },
  },
}

export const Default = (args) => {
  return <AntButton {...args}></AntButton>
}
