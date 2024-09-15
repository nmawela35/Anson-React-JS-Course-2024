import styles from './styles.module.css'

export default function UserUsername(props) {
  return (
    <div>
        <b className={styles.username}>Username:</b>
        <span>{props.username}</span>
    </div>
  )
}
