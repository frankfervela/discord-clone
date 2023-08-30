import {UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
        <p className="text-3xl font-bold text-purple-500">
            <UserButton afterSignOutUrl="/"/>
        </p>
        <p>My button</p>
    </div>
  )
}
