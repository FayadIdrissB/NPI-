import logo from '../../assets/images/logo.png'


function Header() {
  return (
    <div className="w-full h-[150px] bg-[#242424] flex justify-between items-center">
        <div className="h-[80%] w-[100px] mt-[15px]"> 
          <img src={logo} alt="Logo" className='ml-[40px]'/> 
        </div>
    </div>
  )
}
  
export default Header;