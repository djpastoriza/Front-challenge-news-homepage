
import PopularItem from './PopularItem';

const textList = [
  {
    id:1,
    top:'01',
    img:'https://files.fm/thumb_show.php?i=kdwtwca5t',
    title: 'Reviving Retro Pcs',
    text: 'Lorem, ipsum dolor sit amet consectet Praesentium, necessitatibus nemo.',
  },
  {
    id:2,
    top:'02',
    img:'https://files.fm/thumb_show.php?i=hwe86wsuw',
    title: 'Top 10 Laptops of 2022',
    text: 'Lorem, ipsum dolor sit amet consectet Praesentium, necessitatibus nemo.',
  },
  {
    id:3,
    top:'03',
    img:'https://files.fm/thumb_show.php?i=59cr5qxyd',
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