import React from 'react';
import useLockBodyScroll from '../use-scroll-lock';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

describe('useLockBodyScroll', () => {
    const TestComponent = ({ shouldUseLockBodyScroll }) => {
        useLockBodyScroll(shouldUseLockBodyScroll);
        return <div>Scroll lock div</div>;
    };

    beforeEach(() => {
        window.__useScrollLockInstances = undefined;
        window.__useScrollLockStyle = undefined;
        document.body.style.overflow = 'auto';
    });

    it('adds hidden overflow style to body when shouldLock is true', () => {
        const wrapper = mount(<TestComponent shouldUseLockBodyScroll={true} />);
        expect(document.body.style.overflow).toBe('hidden');

        act(() => { wrapper.unmount(); });
        expect(document.body.style.overflow).toBe('auto');
    });

    it('does not add hidden overflow style to body when shouldLock is false', () => {
        const wrapper = mount(
            <TestComponent shouldUseLockBodyScroll={false} />,
        );
        expect(document.body.style.overflow).toBe('auto');
        wrapper.unmount();

        expect(document.body.style.overflow).toBe('auto');
    });
});
