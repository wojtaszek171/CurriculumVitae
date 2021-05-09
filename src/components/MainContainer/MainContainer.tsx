import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import './MainContainer.scss';

function MainContainer() {

  return (
    <div className="main-container-component">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default MainContainer;
