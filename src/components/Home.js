import React from 'react';
import { Alert,Button } from 'reactstrap';

function Home(){
    return (
        <>
        <Button color="danger">Danger!</Button>
        <Alert color="warning">
        This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      </>
    )
}
export default Home;