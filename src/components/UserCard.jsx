"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const UserCard = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session)
    return (
      <>
        Signed as {session?.user?.name}
        <Image
          width={500}
          height={500}
          className="w-32 rounded-full object-cover"
          src={session?.user?.image}
          alt="user-image"
        />
        <br />
        <button className="btn" onClick={() => signOut()}>
          sign out
        </button>
      </>
    );
  return (
    <div>
      Not signed in <br />
      <button className="btn" onClick={() => signIn()}>
        Sign in
      </button>
      {/* <h2 className="font-bold ">use-clinet</h2> */}
      {/* <div className="border-2 p-4 rounded-2xl">{JSON.stringify(session)}</div> */}
    </div>
  );
};

export default UserCard;
