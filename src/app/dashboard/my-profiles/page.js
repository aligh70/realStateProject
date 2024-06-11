import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import MyProfilesPage from "@/template/MyProfilesPage";

async function Myprofiles() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  return <MyProfilesPage profiles={user.profiles} />;
}

export default Myprofiles;
