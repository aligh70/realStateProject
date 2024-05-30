import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignupPage from "@/template/SignupPage";

async function Signup() {
  const sessison = await getServerSession(authOptions);

  if (sessison) redirect("/");
  
  return <SignupPage />;
}

export default Signup;
