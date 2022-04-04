import { connect } from "react-redux";

function Header(props) {
  const dateTime = new Date(props.lastUpdate).toISOString();
  const formattedLastUpdate = dateTime.slice(0, 10) + ' ' + dateTime.slice(11, 19);
  return (
    <header className="app__header">
      <div className="app__wrapper">
        <h1 className="app__title">Mis oraciones</h1>
      </div>
      <p className="app__last-update">Última actualización: <time className="app__last-update-item" dateTime={ dateTime }>{ formattedLastUpdate }</time></p>
    </header>
  );
}

const mapStateToProps = (state) => {
  return { lastUpdate: state.lastUpdate};
};

export default connect(mapStateToProps)(Header);
