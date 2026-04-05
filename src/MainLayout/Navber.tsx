import Navbar from "../components/ui/navber-components-02"


const navigationData = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

const NavbarPage = () => {
  return (
    <div className=''>
      <Navbar navigationData={navigationData} />
    </div>
  )
}

export default NavbarPage
