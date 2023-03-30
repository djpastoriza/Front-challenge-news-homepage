import Note from '../components/Note';
import NewDashboard from './../components/NewDashboard';
import PopularDashboard from './../components/PopularDashboard';

const Home = () => {
  return (
    <>
      <div className='lg:flex lg:gap-5'>
        <div className="flex flex-col">
          <div className="full-w mb-5 h-[600px] bg-[url('assets/images/image-web-3-mobile.jpg')] bg-cover bg-no-repeat transition-all duration-1000 lg:bg-[url('assets/images/image-web-3-desktop.jpg')]"></div>
          <Note />
        </div>
        <NewDashboard />
      </div>
      <PopularDashboard />
    </>
  );
};

export default Home;
