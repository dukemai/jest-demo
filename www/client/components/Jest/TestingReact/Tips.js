import React from 'react';

import { Box } from '../../share';

const propTypes = {

}

const defaultProps = {

}

const script =`appInstance = mount(
    <App />,
)`;

const triggerEvents =`return delayClickOnEpi()
.then(delayGetState)
.then((state) => {
    const stateListing = state.listing;

    expect(stateListing.items.length).toEqual(6);
    expect(stateListing.totalPages).toEqual(1);
    expect(stateListing.totalItems).toEqual(6);
    
    const listingPage = appInstance.find('List');
    expect(listingPage.length).toEqual(1);
    
});`;

const nockContent = `const productResult = await request(app)
.get('/api/products')
.expect(200)
.then(res => res.body);

nock(baseUrl)
.get('/api/products')
.reply(200, productResult, {'Access-Control-Allow-Origin': '*'});`;

const delayScript = `export function delay(fn, timeout){
  const t = timeout || defaultTimeout;
  return new Promise((resolve, reject) => {
    setTimeout(() => {            
      const result = fn();
      
      if(result) {
        resolve(result);
      } else {  
        resolve(true);
      }

    }, t);
  });
}`;

const content = (
    <div className="columns">
        <div className="column is-half">
            Nock + Supertest to mockup requests
            <pre>
                {nockContent}
            </pre>
            Mount the app
            <pre>
                {script}
            </pre>
            Trigger events + Delay verification
            <pre>
                {triggerEvents}
            </pre>
            Delay function
            <pre>
                {delayScript}
            </pre>
        </div>
        <div className="column is-half content">
            <strong>Tips</strong>
            <p>
                We can test features of an application by using Jest, Enzyme, Nock and Delay.
            </p>
            <p>
                Stacks for testing features
                <ul>
                    <li>
                       <strong>Enzyme</strong> to mount the App which enable full length cycle of rendering.
                    </li>
                    <li>
                        <strong>Nock</strong> to hjack all requests to servers and returns some mockup data.
                    </li>
                    <li>
                        <strong>Supertest</strong> to feed data for Nock.
                    </li>
                    <li>
                        <strong>Store</strong> should be exported from the application for verification.
                    </li>
                    <li>
                        <strong>setTimeOut</strong> for delaying to verify UI updated after every trigger. 
                        setTimeOut needs to have a special implementation
                    </li>  
                </ul>
            </p>       
        </div>
    </div>
);

const Tips = () => (
    <Box content={content} />
)

Tips.propTypes = propTypes;
Tips.defaultProps = defaultProps;

export default Tips;