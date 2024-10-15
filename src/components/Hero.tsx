import Image from "next/image"
import HeroImg from '../asset/Blog-Hero.jpg';


const Hero = () => {
  // const form = useForm()

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values)
  // }
  return (
    <div>
        <Image src={HeroImg ? HeroImg : '' } alt="" width={250} height={250} className="w-[20rem] h-[30rem] rounded-xl"/>
        
    </div>
  )
} 

export default Hero