import { Footer, Header } from 'pwojtaszko-design';
import Content from '../Content';
import './MainContainer.scss';

function MainContainer() {
  const handleTitleClick = () => {
    window.location.href = window.location.origin;
  }

  return (
    <div className="main-container-component">
        <Header left={<span className="header-title" onClick={handleTitleClick}>Curriculum Vitae</span>}/>
        <Content />
        <Footer />
    </div>
  );
}

export default MainContainer;
