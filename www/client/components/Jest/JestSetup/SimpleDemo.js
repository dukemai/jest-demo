import React from 'react';

import { Box } from '../../share';

const propTypes = {

}

const defaultProps = {

}

const basicUsage = `test('name of test suite', () => {
});
describe('group of related test suites', () => {
});`
const content = (
    <div className="installation">
        basic usage
        <pre>
            {basicUsage}
        </pre>
        validHelper.js
        <pre>
            {
                `export default function isDate(date) {
                    return (new Date(date) !== 'Invalid Date') && !isNaN(new Date(date));
                }`
            }

        </pre>
        validHelper.test.js
        <pre>
            {
                `import isDate from '../validHelper';

                export default function testValidHelper() {
                describe('Date validator testing', () => {
                    test('isDate invalid', () => {
                    const value = isDate('abc');
                    expect(value).toBe(false);
                    });

                    test('[1] isDate valid', () => {
                    const value = isDate('2017/06/21 11:21:00');
                    expect(value).toBe(true);
                    });

                    test('[2] isDate valid', () => {
                    const value = isDate('Wed Jun 21 2017 11:29:50 GMT+0200 (CEST)');
                    expect(value).toBe(true);
                    });
                });
                }
                `
            }
        </pre>
    </div>
);

const SimpleDemo = () => (
    <Box content={content} />
)

SimpleDemo.propTypes = propTypes;
SimpleDemo.defaultProps = defaultProps;

export default SimpleDemo;