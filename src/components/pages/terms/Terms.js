import Navigation from '../../navigation/navigation';

import './terms.scss';

const Terms = () => {
    return (
        <>
            <section className="header header__terms">
                <Navigation/> 
                <h1 className="title">Terms & conditions</h1>
            </section>

            <section className="terms">
                <h2 className="title">There are no Terms & conditions yet, only a GIF with a funny dog</h2>
                
                <img src="https://c.tenor.com/UZlB6pOWpMAAAAAd/sad-dog.gif" alt="funny dog" />
    
            </section>
           
        </>
    )
}

export default Terms;
