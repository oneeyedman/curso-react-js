import {MemberCard} from './MemberCard';

function TheSimpsons(props) {
  const {familyData} = props;
  return (
    <ul className="the-simpsons">
      {familyData.map((item, index) => {
        return {...item, id: `${item.name}--${index}`}
      }).map(member => (
        <li className="the-simpsons__member" key={member.id}>
          <MemberCard {...member} />
        </li>
      ))}
      
    </ul>);
}

export {TheSimpsons};