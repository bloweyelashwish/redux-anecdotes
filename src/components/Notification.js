import { connect } from 'react-redux'

const Notification = (props) => {
  const notificationToShow = () => {
    console.log(props.notifications)
    return props.notifications
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBlock: 5
  }

  if (notificationToShow == null) {
    return null
  }

  return <div style={style}>{notificationToShow}</div>
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification