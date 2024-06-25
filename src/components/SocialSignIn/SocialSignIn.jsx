import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const SocialSignIn = () => {
  const router = useRouter();
  const session = useSession();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleSocialSignIn = (provider) => {
    const resp = signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : `${process.env.NEXT_PUBLIC_BASE_URL}`,
    });
  };
  if (session.status === "authenticated") {
    router.push(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  }
  return (
    <div className="text-center mt-5">
      <h2 className="mb-3">Or Sign In With</h2>
      <div className="text-xl flex gap-3 justify-center">
        {/* <FaFacebookF className="cursor-pointer border " />
        <FaLinkedin className="cursor-pointer border " /> */}
        <FaGoogle
          onClick={() => handleSocialSignIn("google")}
          className="cursor-pointer border "
        />
        <FaGithub
          onClick={() => handleSocialSignIn("github")}
          className="cursor-pointer border "
        />
      </div>
    </div>
  );
};

export default SocialSignIn;
