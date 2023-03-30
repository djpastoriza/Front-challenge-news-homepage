
import PopularItem from './PopularItem';

const textList = [
  {
    id:1,
    top:'01',
    img:'image-retro-pcs.jpg',
    title: 'Reviving Retro Pcs',
    text: 'Lorem, ipsum dolor sit amet consectet Praesentium, necessitatibus nemo.',
  },
  {
    id:2,
    top:'02',
    img:'image-top-laptops.jpg',
    title: 'Top 10 Laptops of 2022',
    text: 'Lorem, ipsum dolor sit amet consectet Praesentium, necessitatibus nemo.',
  },
  {
    id:3,
    top:'03',
    img:'image-gaming-growth.jpg',
    title: 'The Growth of Gaming',
    text: 'Lorem, ipsum dolor sit amet consectet Praesentium, necessitatibus nemo.',
  },
];


const PopularDashboard = () => {
  return (
    <section className='lg:flex lg:justify-between lg:gap-5'>
      {textList.map((item) =>
        <PopularItem text={item.text} title={item.title} top={item.top} img={item.img} key={item.id}/>
      )}
    </section>
  )
}

export default PopularDashboard