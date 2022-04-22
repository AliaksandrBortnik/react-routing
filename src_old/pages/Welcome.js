import {Route} from 'react-router-dom';

const Gift = _ => <div>Gift for you here...</div>

const Welcome = _ => {
  return (
    <section>
      <h1>Welcome page</h1>
      {/* Nested route */}
      <Route path='/welcome/gift'><Gift/></Route>
    </section>
  )
};

export default Welcome;