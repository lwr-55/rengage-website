import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';

export default function Navbar() {

  return (
    <nav className='custom-nav'>
      <NavbarLayout>
        <NavbarContent />
      </NavbarLayout>
    </nav>
  );
}

