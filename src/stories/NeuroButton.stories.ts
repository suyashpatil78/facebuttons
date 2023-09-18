import NeuroButton from '../components/neuro/NeuroButton';

// This component has two props text and onCLick method please  to modify them
export default {
    title: 'Example/NeuroButton',
    component: NeuroButton,
    parameters: {
        layout: 'centered',
        text: 'Button',
        onClick: (e) => {
            console.log(e);
        },
        width: '100px',
        padding: '10px',
        fontSize: '16px',
    },
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
        onClick: { action: 'clicked' },
        width: { control: 'text' },
        padding: { control: 'text' },
        fontSize: { control: 'text' },
    },
};

export const Primary = {
    args: {
        text: 'Button',
    },
};

