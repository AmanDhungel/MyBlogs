import Image from "next/image"
import HeroImg from '../asset/Blog-Hero.jpg';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";

const Hero = () => {
  const form = useForm()

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values)
  // }
  return (
    <div>
        <Image src={HeroImg ? HeroImg : '' } alt="" width={250} height={250} className="w-[20rem] h-[30rem] rounded-xl"/>
        <Form 
        {...form}
        >
      <form
      //  onSubmit={form.handleSubmit(onSubmit)} 
       className="space-y-8">
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default Hero