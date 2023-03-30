import NewItem from './NewItem';

const textList = [
  {
    id:1,
    title: 'Hydrogen VS Electric Cars',
    text: 'Lorem, ipsum dolor sit amet consectet Praesentium, necessitatibus nemo.',
  },
  {
    id:2,
    title: 'The downsides of ai artistry',
    text: 'Lorem, ipsum dolor sit amet consectet Praesentium, necessitatibus nemo.',
  },
  {
    id:3,
    title: 'Is VC Funding Drying Up',
    text: 'Lorem, ipsum dolor sit amet consectet Praesentium, necessitatibus nemo.',
  },
];


const NewDashboard = () => {
  return (
    <section className="bg-[#00001a] p-5">
      <h2 className='text-[#dea54b] text-primary text-4xl'>New</h2>
      {textList.map((item) =>
        <NewItem text={item.text} title={item.title} key={item.id}/>
      )}
    </section>
  );
};

export default NewDashboard;
