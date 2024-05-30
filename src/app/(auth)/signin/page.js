import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SigninPage from "@/template/SigninPage";

async function Signin() {
  const sessison = await getServerSession(authOptions);

  if (sessison) redirect("/");

  return <SigninPage />;
}

export default Signin;
