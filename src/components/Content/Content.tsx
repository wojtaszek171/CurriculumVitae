import Contact from '../Contact';
import Name from '../Name';
import './Content.scss';

function Content() {

  return (
    <div className="content-component">
      <Name />
      <Contact />
    </div>
  );
}

export default Content;
