import { connect } from 'react-redux'

const Notification = (props) => {
  const notificationToShow = () => props.notifications
  console.log(notificationToShow())

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBlock: 5
  }

  if (notificationToShow() == null) {
    return null
  }

  return <div style={style}>{notificationToShow()}</div>
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification