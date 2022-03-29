function MemberCard(props) {
  const {name, description, img} = props;
  return (
    <div className="simpson-card">
      <div className="simpson-card__details">
        <h2 className="simpson-card__name">{name}</h2>
        <div className="simpson-card__description">{description}</div>
      </div>
      <img className="simpson-card__image" src={`./img/${img}`} alt={name} />
    </div>
  );
}

export {MemberCard};