import styles from './users.module.scss'

export default function UserFavoriteFoods() {
  return (
    <div className="foods-title">
      <span className={styles.foodsTitle}>Favourite Foods:</span>
      <ul>
        <li>Sushi</li>
        <li>Pizza</li>
        <li>Meditarenian Food</li>
      </ul>
    </div>
  )
}
