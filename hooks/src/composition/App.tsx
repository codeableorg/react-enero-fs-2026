import UserBanner from './UserBanner';
import Banner from './Banner';

function App() {
  const user = { name: 'Testino Diprueba' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Banner type='error'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        quos tenetur nisi laboriosam earum voluptatum dicta.
      </Banner>
      <UserBanner user={user} type='success'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        quos tenetur nisi laboriosam earum voluptatum dicta.
      </UserBanner>
    </div>
  );
}

export default App;
