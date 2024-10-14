import Image from "next/image"

const Navbar = () => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-4 backdrop-blur-md bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 flex justify-between">
        <Image src="/logo.png" alt="logo" className="w-12 h-12" />
        <ul className="flex justify-between space-x-8">
            <li>Home</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Blog</li>
        </ul>
    </div>
  )
}

export default Navbar