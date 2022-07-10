import {
    HomeIcon, 
    SearchIcon, 
    LibraryIcon, 
    PlusCircleIcon,
    MenuIcon,
} from "@heroicons/react/outline"

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-neutral-300 flex-grow py-4 px-6">
        {/* // "mistri" logo left side */}
        <div className="flex-items-center" >
            <h1 className=" link font-serif font-medium text-2xl cursor-pointer">
            mistri
            </h1> 
        </div>
        
        {/* // header-right-side */}
        <div className="flex items-center space-x-3">
            <p className="link hidden md:inline-flex cursor-pointer">Explore Services</p>
            <p className="link hidden md:inline-flex cursor-pointer">Sign in</p>
            <p className="link cursor-pointer">Join</p>
            <button className=":h-5 sm:w-5">
                <MenuIcon/>
            </button>
        </div>
    </div>

  )
}

export default Header