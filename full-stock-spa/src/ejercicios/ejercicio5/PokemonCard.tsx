import styles from './PokemonCard.module.css';

type PokemonCardProps = {
  imageUrl: string;
  name: string;
  types: string[];
};

function PokemonCard({ imageUrl, name, types }: PokemonCardProps) {
  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.types}>({types.join(', ')})</p>
    </div>
  );
}

export default PokemonCard;
