import useToggle from './useToggle';

export default function Details({ open }: { open?: boolean }) {
  const [isOpen, toggleOpen] = useToggle(open);

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? 'Ocultar detalles' : 'Mostrar detalles'}
      </button>
      {isOpen && <p>Full Stock es una tienda para desarrolladores.</p>}
    </div>
  );
}
